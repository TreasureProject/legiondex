import { Link } from "@remix-run/react";
import clsx from "clsx";

import type { Legion } from "~/types";
import LegionStatusPill from "~/components/LegionStatusPill";
import {
  getCraftingMaxXpPerLevel,
  getQuestingMaxXpPerLevel,
} from "~/utils/legion";
import ConstellationBadge from "~/components/ConstellationBadge";
import { Rarity } from "~/graphql/bridgeworld.generated";

type Props = {
  legion: Legion;
};

export default function LegionCard({ legion }: Props) {
  const {
    tokenId,
    image,
    imageAlt,
    generation,
    rarity,
    role,
    name,
    craftingLevel,
    craftingXp,
    questingLevel,
    questingXp,
    constellations,
    status,
  } = legion;
  const imgSrc = imageAlt ?? image;
  const isRecruit = generation === "Recruit";
  const isNamed = isRecruit || rarity === Rarity.Legendary;
  return (
    <Link
      to={`/legions/${tokenId}`}
      prefetch="intent"
      className="group overflow-hidden rounded-l-full rounded-r-[2500px] border border-gray-200 bg-white shadow-md hover:shadow-lg dark:border-slate-500 dark:bg-slate-700"
    >
      <div className="relative flex gap-3 p-1">
        <div className="w-[30%] overflow-hidden rounded-full">
          <img alt="" src={imgSrc} />
        </div>
        <div className="flex flex-1 flex-col justify-between py-1 text-left">
          <div className="-ml-1">
            {!isNamed && (
              <span className="block px-1 text-sm dark:text-slate-200">
                {generation} {rarity}
              </span>
            )}
            <span className={clsx("block", !isNamed && "-mt-1")}>
              <span className="px-1 text-lg font-black uppercase tracking-tight group-hover:bg-black group-hover:text-white dark:group-hover:bg-slate-100 dark:group-hover:text-slate-800">
                {isNamed ? name : role}
              </span>
            </span>
          </div>
          {!isRecruit && (
            <div>
              <div className="flex gap-[2px]">
                {constellations
                  .filter(({ value }) => value)
                  .map((constellation) => (
                    <ConstellationBadge
                      key={constellation.element}
                      constellation={constellation}
                    />
                  ))}
              </div>
              <span className="block text-xs">
                <span className="align-middle font-semibold">
                  Craft Lv. {craftingLevel}
                </span>{" "}
                <span className="align-middle text-[0.65rem] dark:text-slate-200">
                  ({craftingXp}/{getCraftingMaxXpPerLevel(craftingLevel)} XP)
                </span>
              </span>
              <span className="block text-xs">
                <span className="align-middle font-semibold">
                  Quest Lv. {questingLevel}
                </span>{" "}
                <span className="align-middle text-[0.65rem] dark:text-slate-200">
                  ({questingXp}/{getQuestingMaxXpPerLevel(questingLevel)} XP)
                </span>
              </span>
            </div>
          )}
        </div>
        <div className="absolute top-0 right-0 bottom-0 flex flex-col items-end justify-between">
          <span className="pt-1 pr-1.5 text-lg font-thin">#{tokenId}</span>
          <LegionStatusPill
            status={status}
            className="rounded-none rounded-tl-lg pr-2.5 text-xs"
          />
        </div>
      </div>
    </Link>
  );
}
