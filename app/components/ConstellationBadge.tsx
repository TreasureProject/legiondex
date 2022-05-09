import clsx from "clsx";
import type { Constellation} from "~/types";
import { ConstellationElement } from "~/types";

type Props = {
  constellation: Constellation;
};

const ELEMENT_COLOR_CLASS_NAMES: Record<ConstellationElement, string> = {
  [ConstellationElement.Dark]: "bg-stone-500",
  [ConstellationElement.Earth]: "bg-green-500",
  [ConstellationElement.Fire]: "bg-red-500",
  [ConstellationElement.Light]: "bg-neutral-300 text-neutral-600",
  [ConstellationElement.Water]: "bg-blue-500",
  [ConstellationElement.Wind]: "bg-cyan-500",
};

export default function ConstellationBadge({ constellation }: Props) {
  const { element, value } = constellation;
  return (
    <span
      title={element}
      className={clsx(
        ELEMENT_COLOR_CLASS_NAMES[element],
        "block h-4 w-4 rounded-full text-center text-xs text-white"
      )}
    >
      {value}
    </span>
  );
}
