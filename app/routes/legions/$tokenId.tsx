import type { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import type { Legion } from "~/types";
import { getLegion } from "~/models/legion.server";
import {
  getCraftingMaxXpPerLevel,
  getQuestingMaxXpPerLevel,
} from "~/utils/legion";
import { useImageColor } from "~/hooks/useImageColor";
import { truncateAddress } from "~/utils/address";
import ConstellationBadge from "~/components/ConstellationBadge";
import LegionStatusPill from "~/components/LegionStatusPill";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { Rarity } from "~/graphql/bridgeworld.generated";

type LoaderData = {
  legion: Legion;
};

export const meta: MetaFunction = ({ data }) => {
  const { legion } = data as LoaderData;
  const { tokenId, generation, rarity, role, name } = legion;
  const legionName =
    generation === "Recruit" || rarity === Rarity.Legendary
      ? name
      : `${generation} ${rarity} - ${role}`;

  const title = `#${tokenId} ${legionName} | Legiondex`;
  const description = "Your guide to the heroes of Bridgeworld.";
  const image = legion.imageAlt ?? legion.image;

  return {
    title,
    description,
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "twitter:card": "summary",
    "twitter:creator": "@0xrappzula",
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const { tokenId } = params;
  invariant(tokenId, "Legion not found");

  const parsedTokenId = parseInt(tokenId);
  const legion = await getLegion(
    Number.isNaN(parsedTokenId) ? 0 : parsedTokenId
  );
  if (!legion) {
    throw new Response("Not Found", { status: 404 });
  }

  return json<LoaderData>({ legion });
};

export default function Token() {
  const { legion } = useLoaderData<LoaderData>();
  const tintColor = useImageColor(legion.image);

  const {
    tokenId,
    generation,
    rarity,
    role,
    name,
    image,
    imageAlt,
    constellations,
    craftingLevel,
    craftingXp,
    questingLevel,
    questingXp,
    summons,
    owner,
    status,
  } = legion;

  const isRecruit = generation === "Recruit";
  const isNamed = isRecruit || rarity === Rarity.Legendary;
  return (
    <>
      <div
        className="h-[20vh]"
        style={{ backgroundColor: `rgba(${tintColor.join(", ")})` }}
      />
      <main className="container mx-auto -mt-[8vh] pb-10 text-center">
        <div className="mx-auto h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-white shadow-lg">
          <img alt="" src={imageAlt} />
        </div>
        <div className="mt-3 mb-8">
          <h3 className="font-medium">#{tokenId}</h3>
          {!isNamed && (
            <h2 className="text-lg leading-5">
              {generation} {rarity}
            </h2>
          )}
          <h1 className="text-3xl font-black uppercase tracking-tight">
            {isNamed ? name : role}
          </h1>
          <div className="mb-2 flex items-center justify-center gap-[2px]">
            {constellations.map((constellation) => (
              <ConstellationBadge
                key={constellation.element}
                constellation={constellation}
              />
            ))}
          </div>
          <LegionStatusPill status={status} />
          {owner && (
            <div className="mt-4 text-sm">
              <span className="block">
                Owned by{" "}
                <Link
                  to={`/owners/${owner}`}
                  prefetch="intent"
                  className="text-sky-800 hover:underline"
                >
                  {truncateAddress(owner)}
                </Link>
              </span>
              <span className="block">
                <a
                  href={`https://arbiscan.io/token/0xfe8c1ac365ba6780aec5a985d989b327c27670a1?a=${tokenId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 text-sky-800 hover:underline"
                >
                  View on Arbiscan <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-5 md:gap-10">
          <div className="md:col-span-2 md:overflow-hidden md:rounded-xl md:border md:border-gray-200 md:shadow-lg">
            <img alt="" src={image} />
          </div>
          <div className="text-left md:col-span-3">
            <div className="flex flex-col gap-10">
              <div className="overflow-hidden border-t border-b border-gray-200 bg-white shadow-md md:rounded-xl md:border">
                <div className="bg-zinc-50 px-4 py-3">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    Crafts
                    <span className="text-sm text-zinc-400">
                      Level {craftingLevel} ({craftingXp}/
                      {getCraftingMaxXpPerLevel(craftingLevel)} XP)
                    </span>
                  </h2>
                </div>
                {/* <div className="p-4 text-sm">
                  None
                </div> */}
              </div>
              <div className="overflow-hidden border-t border-b border-gray-200 bg-white shadow-md md:rounded-xl md:border">
                <div className="bg-zinc-50 px-4 py-3">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    Quests
                    <span className="text-sm text-zinc-400">
                      Level {questingLevel} ({questingXp}/
                      {getQuestingMaxXpPerLevel(questingLevel)} XP)
                    </span>
                  </h2>
                </div>
                {/* <div className="p-4 text-sm">
                  None
                </div> */}
              </div>
              <div className="overflow-hidden border-t border-b border-gray-200 bg-white shadow-md md:rounded-xl md:border">
                <div className="bg-zinc-50 px-4 py-3">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    Summons
                    <span className="text-sm text-zinc-400">
                      {summons} / {generation === "Genesis" ? "∞" : 1}
                    </span>
                  </h2>
                </div>
                {/* <div className="p-4 text-sm">
                  None
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
