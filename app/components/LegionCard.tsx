import type { Legion } from "~/types";
import { Link } from "@remix-run/react";
import LegionStatusPill from "~/components/LegionStatusPill";
import {
  getCraftingMaxXpPerLevel,
  getQuestingMaxXpPerLevel,
} from "~/utils/legion";
import ConstellationBadge from "~/components/ConstellationBadge";
import { Rarity } from "~/graphql/bridgeworld.generated";
import clsx from "clsx";

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
      className="group overflow-hidden rounded-l-full rounded-r-[2500px] border border-gray-200 bg-white drop-shadow hover:drop-shadow-md"
    >
      <div className="flex gap-3 p-1">
        <div className="w-[30%] overflow-hidden rounded-full">
          <img src={imgSrc} />
        </div>
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col justify-between py-1 text-left">
            <div>
              {!isNamed && (
                <span className="block text-sm">
                  {generation} {rarity}
                </span>
              )}
              <span
                className={clsx(
                  "block text-lg font-black uppercase tracking-tight group-hover:underline",
                  !isNamed && "-mt-1"
                )}
              >
                {isNamed ? name : role}
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
                  <span className="align-middle text-[0.65rem]">
                    ({craftingXp}/{getCraftingMaxXpPerLevel(craftingLevel)} XP)
                  </span>
                </span>
                <span className="block text-xs">
                  <span className="align-middle font-semibold">
                    Quest Lv. {questingLevel}
                  </span>{" "}
                  <span className="align-middle text-[0.65rem]">
                    ({questingXp}/{getQuestingMaxXpPerLevel(questingLevel)} XP)
                  </span>
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col items-end justify-between p-1">
            <span className="text-xl font-thin">#{tokenId}</span>
            <LegionStatusPill status={status} className="text-xs" />
          </div>
        </div>
      </div>
    </Link>
  );
}
