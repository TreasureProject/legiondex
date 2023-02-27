import { type BridgeworldClient, marketplaceSdk } from "~/api.server";
import type {
  GetLegionsQuery,
  LegionInfo,
  Rarity,
  Token_Filter,
} from "~/graphql/bridgeworld.generated";
import { Category } from "~/graphql/bridgeworld.generated";
import type {
  Filter,
  Legion,
  LegionClass,
  LegionGeneration,
  Optional,
  Summon,
} from "~/types";
import { ConstellationElement, LegionStatus } from "~/types";
import { filterLegions } from "~/utils/legion";
import { normalizeSummon } from "./summon.server";

type RawLegion = GetLegionsQuery["tokens"][0];

type GetLegionsFilter = {
  generation?: LegionGeneration;
  rarity?: Rarity;
};

type GetLegionResponse = {
  legion?: Legion;
  summons: Summon[];
};

const GENERATIONS: LegionGeneration[] = ["Genesis", "Auxiliary", "Recruit"];

const normalizeImage = (url: string) =>
  url.replace("ipfs://", "https://treasure-marketplace.mypinata.cloud/ipfs/");

export const normalizeLegion = (
  {
    id,
    tokenId,
    name,
    generation,
    rarity,
    image,
    imageAlt,
    metadata: rawMetadata,
    owners,
  }: RawLegion,
  status = LegionStatus.Idle
): Legion => {
  const metadata = rawMetadata ? (rawMetadata as LegionInfo) : undefined;
  return {
    id,
    tokenId: parseInt(tokenId),
    name,
    generation: GENERATIONS[generation ?? 2],
    rarity,
    role: metadata?.role as LegionClass,
    image: normalizeImage(image),
    imageAlt: imageAlt ? normalizeImage(imageAlt) : undefined,
    status,
    owner: owners[0].user.id,
    craftingLevel: metadata?.crafting ?? 0,
    craftingXp: metadata?.craftingXp ?? 0,
    questingLevel: metadata?.questing ?? 0,
    questingXp: metadata?.questingXp ?? 0,
    summonCount: metadata?.summons ?? 0,
    constellations: [
      {
        element: ConstellationElement.Light,
        value: metadata?.constellation?.light ?? 0,
      },
      {
        element: ConstellationElement.Dark,
        value: metadata?.constellation?.dark ?? 0,
      },
      {
        element: ConstellationElement.Earth,
        value: metadata?.constellation?.earth ?? 0,
      },
      {
        element: ConstellationElement.Fire,
        value: metadata?.constellation?.fire ?? 0,
      },
      {
        element: ConstellationElement.Water,
        value: metadata?.constellation?.water ?? 0,
      },
      {
        element: ConstellationElement.Wind,
        value: metadata?.constellation?.wind ?? 0,
      },
    ],
  };
};

const updateLegionsStatuses = async (
  client: BridgeworldClient,
  prevLegions: Legion[]
): Promise<Legion[]> => {
  const legions = [...prevLegions];

  // Fetch on-going activities
  const [activitiesResponse, marketplaceResponse] = await Promise.all([
    client.getLegionsActivities({
      ids: legions.map(({ id }) => id),
    }),
    marketplaceSdk.getLegionsListings({
      ids: legions.map(
        ({ tokenId }) =>
          `0xfe8c1ac365ba6780aec5a985d989b327c27670a1-0x${tokenId.toString(16)}`
      ),
    }),
  ]);

  activitiesResponse.advancedQuests.forEach(({ token, user }) => {
    const index = legions.findIndex(({ id }) => id === token.id);
    legions[index].status = LegionStatus.Questing;
    legions[index].owner = user.id;
  });

  activitiesResponse.crafts.forEach(({ token, user }) => {
    const index = legions.findIndex(({ id }) => id === token.id);
    legions[index].status = LegionStatus.Crafting;
    legions[index].owner = user.id;
  });

  activitiesResponse.quests.forEach(({ token, user }) => {
    const index = legions.findIndex(({ id }) => id === token.id);
    legions[index].status = LegionStatus.Questing;
    legions[index].owner = user.id;
  });

  activitiesResponse.stakedTokens.forEach(({ token, user }) => {
    const index = legions.findIndex(({ id }) => id === token.id);
    legions[index].status = LegionStatus.Staked;
    legions[index].owner = user.id;
  });

  activitiesResponse.summons.forEach(({ token, user }) => {
    const index = legions.findIndex(({ id }) => id === token.id);
    legions[index].status = LegionStatus.Summoning;
    legions[index].owner = user.id;
  });

  marketplaceResponse.listings.forEach(({ token, seller }) => {
    const parsedTokenId = parseInt(token.tokenId);
    const index = legions.findIndex(({ tokenId }) => tokenId === parsedTokenId);
    legions[index].status = LegionStatus.Listed;
    legions[index].owner = seller.id;
  });

  return legions;
};

export const getUserLegions = async (
  client: BridgeworldClient,
  address: string,
  filters?: Filter[]
): Promise<Legion[]> => {
  const [response, marketplaceResponse] = await Promise.all([
    client.getUserLegions({
      id: address.toLowerCase(),
    }),
    marketplaceSdk.getUserListings({
      id: address.toLowerCase(),
    }),
  ]);
  if (!response.user) {
    return [];
  }

  const listedTokenIds = marketplaceResponse.listings.map(
    ({ token: { tokenId } }) => tokenId
  );

  const legions = [
    ...response.user.advancedQuests.map(({ token }) =>
      normalizeLegion(token, LegionStatus.Questing)
    ),
    ...response.user.crafts.map(({ token }) =>
      normalizeLegion(token, LegionStatus.Crafting)
    ),
    ...response.user.quests.map(({ token }) =>
      normalizeLegion(token, LegionStatus.Questing)
    ),
    ...response.user.staked.map(({ token }) =>
      normalizeLegion(token, LegionStatus.Staked)
    ),
    ...response.user.summons.map(({ token }) =>
      normalizeLegion(token, LegionStatus.Summoning)
    ),
    ...response.user.tokens.map(({ token }) =>
      normalizeLegion(
        token,
        listedTokenIds.includes(token.tokenId)
          ? LegionStatus.Listed
          : LegionStatus.Idle
      )
    ),
  ].flat();
  return filterLegions(legions, filters).sort((a, b) => a.tokenId - b.tokenId);
};

export const getLegions = async (
  client: BridgeworldClient,
  first: number = 30,
  skip: number = 0,
  filter: Optional<GetLegionsFilter> = undefined
): Promise<Legion[]> => {
  const where: Token_Filter = { category: Category.Legion };
  if (filter?.generation) {
    where.generation = GENERATIONS.indexOf(filter.generation);
  }

  if (filter?.rarity) {
    where.rarity = filter.rarity;
  }

  const response = await client.getLegions({
    first,
    skip,
    where,
  });
  const legions = response.tokens.map((token) => normalizeLegion(token)) ?? [];
  const legionsWithStatuses = await updateLegionsStatuses(client, legions);
  return legionsWithStatuses;
};

export const getLegion = async (
  client: BridgeworldClient,
  tokenId: number
): Promise<GetLegionResponse> => {
  let result: GetLegionResponse = {
    summons: [],
  };

  const response = await client.getLegionId({ tokenId });
  if (!response.tokens?.[0]) {
    return result;
  }

  const id = response.tokens[0].id;
  const detailsResponse = await client.getLegionDetails({
    id,
    token: id,
  });
  if (!detailsResponse.token) {
    return result;
  }

  const legion = normalizeLegion(detailsResponse.token);
  const legionWithStatus = await updateLegionsStatuses(client, [legion]);
  result.legion = legionWithStatus[0];
  result.summons = detailsResponse.summons.map(normalizeSummon);
  return result;
};
