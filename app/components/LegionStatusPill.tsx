import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { LegionStatus } from "~/types";

type Props = HTMLAttributes<HTMLSpanElement> & {
  status: LegionStatus;
};

const STATUS_TO_DOT_CLASS_NAMES = {
  [LegionStatus.Idle]: "bg-slate-800 dark:bg-slate-200",
  [LegionStatus.Crafting]: "bg-orange-700 dark:bg-orange-100",
  [LegionStatus.Listed]: "bg-rose-700 dark:bg-rose-100",
  [LegionStatus.Questing]: "bg-sky-700 dark:bg-sky-100",
  [LegionStatus.Staked]: "bg-emerald-700 dark:bg-emerald-100",
  [LegionStatus.Summoning]: "bg-indigo-700 dark:bg-indigo-100",
};

const STATUS_TO_CLASS_NAMES = {
  [LegionStatus.Idle]:
    "bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  [LegionStatus.Crafting]:
    "bg-orange-100 text-orange-700 dark:bg-orange-700 dark:text-orange-100",
  [LegionStatus.Listed]:
    "bg-rose-100 text-rose-700 dark:bg-rose-700 dark:text-rose-100",
  [LegionStatus.Questing]:
    "bg-sky-100 text-sky-700 dark:bg-sky-700 dark:text-sky-100",
  [LegionStatus.Staked]:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100",
  [LegionStatus.Summoning]:
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-100",
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
