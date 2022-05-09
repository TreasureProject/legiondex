import { bridgeworldSdk } from "~/api.server";
import {
  Category,
  GetLegionsQuery,
  LegionInfo,
  Rarity,
  Token_Filter,
} from "~/graphql/bridgeworld.generated";
import {
  ConstellationElement,
  Legion,
  LegionClass,
  LegionGeneration,
  LegionStatus,
  Optional,
} from "~/types";

type RawLegion = GetLegionsQuery["tokens"][0];

type GetLegionsFilter = {
  generation?: LegionGeneration;
  rarity?: Rarity;
};

const GENERATIONS: LegionGeneration[] = ["Genesis", "Auxiliary", "Recruit"];

const normalizeImage = (url: string) =>
  url.replace("ipfs://", "https://treasure-marketplace.mypinata.cloud/ipfs/");

const normalizeLegion = (
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
    summons: metadata?.summons ?? 0,
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
  prevLegions: Legion[]
): Promise<Legion[]> => {
  const legions = [...prevLegions];
  const legionIds = legions.map(({ id }) => id);

  // Fetch on-going activities
  const activitiesResponse = await bridgeworldSdk.getLegionsActivities({
    ids: legionIds,
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

  return legions;
};

export const getUserLegions = async (address: string): Promise<Legion[]> => {
  const response = await bridgeworldSdk.getUserLegions({
    id: address.toLowerCase(),
  });
  const legions = [
    ...response.crafts.map(({ token }) =>
      normalizeLegion(token, LegionStatus.Crafting)
    ),
    ...response.quests.map(({ token }) =>
      normalizeLegion(token, LegionStatus.Questing)
    ),
    ...response.stakedTokens.map(({ token }) =>
      normalizeLegion(token, LegionStatus.Staked)
    ),
    ...response.summons.map(({ token }) =>
      normalizeLegion(token, LegionStatus.Summoning)
    ),
    ...response.userTokens.map(({ token }) => normalizeLegion(token)),
  ].flat();
  return legions.sort((a, b) => a.tokenId - b.tokenId);
};

export const getLegions = async (
  filter: Optional<GetLegionsFilter> = undefined
): Promise<Legion[]> => {
  const where: Token_Filter = { category: Category.Legion };
  if (filter?.generation) {
    where.generation = GENERATIONS.indexOf(filter.generation);
  }

  if (filter?.rarity) {
    where.rarity = filter.rarity;
  }

  const response = await bridgeworldSdk.getLegions({ where });
  const legions = response.tokens.map((token) => normalizeLegion(token)) ?? [];
  const legionsWithStatuses = await updateLegionsStatuses(legions);
  return legionsWithStatuses;
};

export const getLegion = async (
  tokenId: string
): Promise<Legion | undefined> => {
  const response = await bridgeworldSdk.getLegions({
    where: {
      category: Category.Legion,
      tokenId,
    },
  });

  if (!response.tokens?.[0]) {
    return undefined;
  }

  const legion = normalizeLegion(response.tokens?.[0]);
  const legionsWithStatuses = await updateLegionsStatuses([legion]);
  return legionsWithStatuses[0];
};
