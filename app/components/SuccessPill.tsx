import clsx from "clsx";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  success: boolean;
};

export default function SuccessPill({
  success,
  className,
  ...spanProps
}: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-2 py-[1px] font-medium",
        className,
        success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      )}
      {...spanProps}
    >
      {success ? "Success" : "Failed"}
    </span>
  );
}
