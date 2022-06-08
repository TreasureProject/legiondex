import type { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import type { Legion, Summon } from "~/types";
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
import { generateMetaTags } from "~/utils/meta";
// import SuccessPill from "~/components/SuccessPill";

type LoaderData = {
  legion: Legion;
  summons: Summon[];
};

export const meta: MetaFunction = ({ data }) => {
  const { legion } = data as LoaderData;
  const { tokenId, generation, rarity, role, name } = legion;
  const legionName =
    generation === "Recruit" || rarity === Rarity.Legendary
      ? name
      : `${generation} ${rarity} - ${role}`;

  return generateMetaTags(
    `#${tokenId} ${legionName}`,
    legion.imageAlt ?? legion.image
  );
};

export const loader: LoaderFunction = async ({ params }) => {
  const { tokenId } = params;
  invariant(tokenId, "Legion not found");

  const parsedTokenId = parseInt(tokenId);
  const { legion, summons } = await getLegion(
    Number.isNaN(parsedTokenId) ? 0 : parsedTokenId
  );
  if (!legion) {
    throw new Response("Not Found", { status: 404 });
  }

  return json<LoaderData>({ legion, summons });
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
    summonCount,
    owner,
    status,
  } = legion;

  const isRecruit = generation === "Recruit";
  const isNamed = isRecruit || rarity === Rarity.Legendary;
  return (
    <>
      <div
        className="h-[20vh]"
        style={{
          backgroundColor: tintColor
            ? `rgba(${tintColor.join(", ")})`
            : "transparent",
        }}
      />
      <main className="container mx-auto -mt-[8vh] pb-10 text-center">
        <div className="mx-auto h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-slate-100 shadow-lg">
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
                  className="text-sky-800 hover:underline dark:text-slate-400"
                >
                  {truncateAddress(owner)}
                </Link>
              </span>
              <span className="block">
                <a
                  href={`https://arbiscan.io/token/0xfe8c1ac365ba6780aec5a985d989b327c27670a1?a=${tokenId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 text-sky-800 hover:underline dark:text-slate-400"
                >
                  View on Arbiscan <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-5 md:gap-10">
          <div className="md:col-span-2">
            <div className="border-gray-200 dark:border-slate-900 md:overflow-hidden md:rounded-xl md:border md:shadow-lg">
              <img alt="" src={image} />
            </div>
          </div>
          <div className="text-left md:col-span-3">
            <div className="flex flex-col gap-10">
              <div className="overflow-hidden border-t border-b border-gray-200 shadow-md dark:border-slate-500 md:rounded-xl md:border">
                <div className="bg-zinc-50 px-4 py-3 dark:bg-slate-700">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    Crafts
                    <span className="text-sm text-zinc-400 dark:text-slate-400">
                      Level {craftingLevel} ({craftingXp}/
                      {getCraftingMaxXpPerLevel(craftingLevel)} XP)
                    </span>
                  </h2>
                </div>
                {/* <div className="p-4 text-sm">
                  None
                </div> */}
              </div>
              <div className="overflow-hidden border-t border-b border-gray-200 shadow-md dark:border-slate-500 md:rounded-xl md:border">
                <div className="bg-zinc-50 px-4 py-3 dark:bg-slate-700">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    Quests
                    <span className="text-sm text-zinc-400 dark:text-slate-400">
                      Level {questingLevel} ({questingXp}/
                      {getQuestingMaxXpPerLevel(questingLevel)} XP)
                    </span>
                  </h2>
                </div>
                {/* <div className="p-4 text-sm">
                  None
                </div> */}
              </div>
              <div className="overflow-hidden border-t border-b border-gray-200 shadow-md dark:border-slate-500 md:rounded-xl md:border">
                <div className="bg-zinc-50 px-4 py-3 dark:bg-slate-700">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    Summons
                    <span className="text-sm text-zinc-400 dark:text-slate-400">
                      {summonCount} / {generation === "Genesis" ? "∞" : 1}
                    </span>
                  </h2>
                </div>
                {/* <div className="p-4 text-sm">
                  <table className="w-full table-fixed">
                    {summons.map((summon) => (
                      <tr key={summon.id} className="h-14">
                        <td>{new Date(summon.endDate).toLocaleDateString()}</td>
                        <td>
                          <SuccessPill success={summon.success} />
                        </td>
                        <td className="py-4">
                          {summon.resultLegion && (
                            <Link
                              to={`/legions/${summon.resultLegion.tokenId}`}
                              className="flex items-center gap-2"
                            >
                              <img
                                src={
                                  summon.resultLegion.imageAlt ??
                                  summon.resultLegion.image
                                }
                                className="h-14 w-14 rounded-full"
                              />
                              <span>
                                <span className="block text-xs">
                                  #{summon.resultLegion.tokenId}
                                </span>
                                <span className="block">
                                  {summon.resultLegion.name}
                                </span>
                                <span className="-mt-2 block text-lg font-black uppercase">
                                  {summon.resultLegion.role}
                                </span>
                              </span>
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </table>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
