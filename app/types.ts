import type { Rarity } from "./graphql/bridgeworld.generated";

export type Optional<T> = T | undefined;

export enum LegionStatus {
  Idle = "Idle",
  Crafting = "Crafting",
  Questing = "Questing",
  Staked = "Staked",
  Summoning = "Summoning",
}

export type LegionGeneration = "Genesis" | "Auxiliary" | "Recruit";

export type LegionClass =
  | "Recruit"
  | "Siege"
  | "Fighter"
  | "Assassin"
  | "Ranger"
  | "Spellcaster"
  | "Riverman"
  | "Numeraire"
  | "Ashen Kingsguard"
  | "Clockwork Marine"
  | "Executioner"
  | "Reaper"
  | "Shadowguard"
  | "Origin";

export enum ConstellationElement {
  Dark = "Dark",
  Earth = "Earth",
  Fire = "Fire",
  Light = "Light",
  Water = "Water",
  Wind = "Wind",
}

export type Constellation = {
  element: ConstellationElement;
  value: number;
};

export type Legion = {
  id: string;
  tokenId: number;
  name: string;
  generation: LegionGeneration;
  rarity: Rarity;
  role?: LegionClass;
  image: string;
  imageAlt?: string;
  status: LegionStatus;
  owner?: string;
  craftingLevel: number;
  craftingXp: number;
  questingLevel: number;
  questingXp: number;
  summons: number;
  constellations: Constellation[];
};
