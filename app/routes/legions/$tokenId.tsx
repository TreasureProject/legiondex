import { LoaderFunction } from "@remix-run/server-runtime";
import { json, Response } from "@remix-run/node";
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

type LoaderData = {
  legion: Legion;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { tokenId } = params;
  invariant(tokenId, "Legion not found");

  const legion = await getLegion(tokenId);
  if (!legion) {
    throw new Response("Not Found", { status: 404 });
  }

  return json<LoaderData>({ legion });
};

export default function Token() {
  const { legion } = useLoaderData<LoaderData>();
  const tintColor = useImageColor(legion.image);
  return (
    <>
      <div
        className="h-[20vh]"
        style={{ backgroundColor: `rgba(${tintColor.join(", ")})` }}
      />
      <main className="container mx-auto -mt-[10vh] mb-10 text-center">
        <div className="mx-auto h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-white drop-shadow-lg">
          <img src={legion.imageAlt} />
        </div>
        <div className="mt-3 mb-8">
          <h3 className="font-medium">#{legion.tokenId}</h3>
          <h2 className="text-lg leading-5">
            {legion.generation} {legion.rarity}
          </h2>
          <h1 className="text-3xl font-black uppercase tracking-tight">
            {legion.role}
          </h1>
          <div className="mb-2 flex items-center justify-center gap-[2px]">
            {legion.constellations.map((constellation) => (
              <ConstellationBadge
                key={constellation.element}
                constellation={constellation}
              />
            ))}
          </div>
          <LegionStatusPill status={legion.status} />
          {legion.owner && (
            <div className="mt-4 text-sm">
              <span className="block">
                Owned by{" "}
                <Link
                  to={`/owners/${legion.owner}`}
                  prefetch="intent"
                  className="text-sky-800 hover:underline"
                >
                  {truncateAddress(legion.owner)}
                </Link>
              </span>
              <span className="block">
                <a
                  href={`https://arbiscan.io/token/0xfe8c1ac365ba6780aec5a985d989b327c27670a1?a=${legion.tokenId}`}
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
          <div className="md:col-span-2 md:overflow-hidden md:rounded-xl md:border md:border-gray-200 md:drop-shadow-lg">
            <img src={legion.image} />
          </div>
          <div className="text-left md:col-span-3">
            <div className="flex flex-col gap-10">
              <div className="overflow-hidden border-t border-b border-gray-200 bg-white drop-shadow-md md:rounded-xl md:border">
                <div className="bg-zinc-50 px-4 py-3">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    Crafts
                    <span className="text-sm text-zinc-400">
                      Level {legion.craftingLevel} ({legion.craftingXp}/
                      {getCraftingMaxXpPerLevel(legion.craftingLevel)} XP)
                    </span>
                  </h2>
                </div>
                {/* <div className="p-4 text-sm">
                  None
                </div> */}
              </div>
              <div className="overflow-hidden border-t border-b border-gray-200 bg-white drop-shadow-md md:rounded-xl md:border">
                <div className="bg-zinc-50 px-4 py-3">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    Quests
                    <span className="text-sm text-zinc-400">
                      Level {legion.questingLevel} ({legion.questingXp}/
                      {getQuestingMaxXpPerLevel(legion.questingLevel)} XP)
                    </span>
                  </h2>
                </div>
                {/* <div className="p-4 text-sm">
                  None
                </div> */}
              </div>
              <div className="overflow-hidden border-t border-b border-gray-200 bg-white drop-shadow-md md:rounded-xl md:border">
                <div className="bg-zinc-50 px-4 py-3">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    Summons
                    <span className="text-sm text-zinc-400">
                      {legion.summons} /{" "}
                      {legion.generation === "Genesis" ? "∞" : 1}
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
        {/* <div className="grid grid-cols-6">
          <Constellation level={7} element="fire" />
          <Constellation level={7} element="water" />
          <Constellation level={7} element="wind" />
          <Constellation level={7} element="earth" />
          <Constellation level={7} element="light" />
          <Constellation level={7} element="dark" />
        </div> */}
      </main>
    </>
  );
}
