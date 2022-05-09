import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { LegionStatus } from "~/types";

type Props = HTMLAttributes<HTMLSpanElement> & {
  status: LegionStatus;
};

const STATUS_TO_DOT_CLASS_NAMES = {
  [LegionStatus.Idle]: "bg-zinc-700",
  [LegionStatus.Crafting]: "bg-orange-700",
  [LegionStatus.Questing]: "bg-sky-700",
  [LegionStatus.Staked]: "bg-emerald-700",
  [LegionStatus.Summoning]: "bg-indigo-700",
};

const STATUS_TO_CLASS_NAMES = {
  [LegionStatus.Idle]: "bg-zinc-200 text-zinc-700",
  [LegionStatus.Crafting]: "bg-orange-100 text-orange-700",
  [LegionStatus.Questing]: "bg-sky-100 text-sky-700",
  [LegionStatus.Staked]: "bg-emerald-100 text-emerald-700",
  [LegionStatus.Summoning]: "bg-indigo-100 text-indigo-700",
};

export default function LegionStatusPill({
  status,
  className,
  ...spanProps
}: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-2 py-[1px] font-medium",
        className,
        STATUS_TO_CLASS_NAMES[status]
      )}
      {...spanProps}
    >
      <span className="relative mt-0.5 h-1.5 w-1.5">
        {status !== LegionStatus.Idle && (
          <span
            className={clsx(
              "absolute inset-0 h-full w-full animate-ping rounded-full",
              STATUS_TO_DOT_CLASS_NAMES[status]
            )}
          ></span>
        )}
        <span
          className={clsx(
            "relative block h-full w-full rounded-full",
            STATUS_TO_DOT_CLASS_NAMES[status]
          )}
        ></span>
      </span>
      {status}
    </span>
  );
}
