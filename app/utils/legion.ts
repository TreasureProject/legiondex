import { Rarity } from "~/graphql/bridgeworld.generated";
import { Legion } from "~/types";

export const getLegionDisplayName = (legion: Legion) => {
  if (legion.generation === "Recruit") {
    return "Recruit";
  }

  if (legion.generation === "Genesis" && legion.rarity === Rarity.Legendary) {
    return legion.name;
  }

  return `${legion.generation} ${legion.rarity} - ${legion.role}`;
};

export const getCraftingMaxXpPerLevel = (level: number): number => {
  switch (level) {
    case 1:
      return 140;
    case 2:
    case 3:
    case 4:
      return 160;
    case 5:
      return 480;
    default:
      return 0;
  }
};

export const getQuestingMaxXpPerLevel = (level: number): number => {
  switch (level) {
    case 1:
      return 100;
    case 2:
      return 200;
    case 3:
      return 500;
    case 4:
      return 1000;
    case 5:
      return 2000;
    default:
      return 0;
  }
};
