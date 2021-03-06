import type { Rarity, Status } from "./graphql/bridgeworld.generated";

export type Optional<T> = T | undefined;

export enum LegionStatus {
  Idle = "Idle",
  Crafting = "Crafting",
  Listed = "Listed",
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

export type Summon = {
  id: string;
  endDate: Date;
  status: Status;
  success: boolean;
  resultLegion?: Legion;
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
  summonCount: number;
  constellations: Constellation[];
};

export enum FilterMethod {
  Equals = "equals",
  Not = "not",
  GreaterThan = "gt",
  LessThan = "lt",
  GreaterThanOrEqualTo = "gte",
  LessThanOrEqualTo = "lte",
  In = "in",
  NotIn = "not_in",
}

export type Filter = {
  id: string;
  method: FilterMethod;
  value: string | number;
};
