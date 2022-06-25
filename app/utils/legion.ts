import { Rarity } from "~/graphql/bridgeworld.generated";
import type { Filter, Legion } from "~/types";
import { FilterMethod } from "~/types";

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

export const filterLegions = (legions: Legion[], filters?: Filter[]) =>
  legions.filter((legion) => {
    if (!filters || filters.length === 0) {
      return true;
    }

    return filters.every(({ id, method, value }) => {
      switch (id) {
        case "questingLevel":
        case "craftingLevel": {
          const field = id as "questingLevel" | "craftingLevel";
          switch (method) {
            case FilterMethod.Equals:
              return legion[field] === Number(value);
            case FilterMethod.GreaterThanOrEqualTo:
              return legion[field] >= Number(value);
            case FilterMethod.LessThanOrEqualTo:
              return legion[field] <= Number(value);
          }
          break;
        }

        case "constellation":
          if (method === FilterMethod.In) {
            return legion.constellations.some(
              (constellation) =>
                constellation.element === value && constellation.value > 0
            );
          }
          break;

        case "constellationLevel":
          return legion.constellations.some((constellation) => {
            switch (method) {
              case FilterMethod.Equals:
                return constellation.value === Number(value);
              case FilterMethod.GreaterThanOrEqualTo:
                return constellation.value >= Number(value);
              case FilterMethod.LessThanOrEqualTo:
                return constellation.value <= Number(value);
              default:
                return false;
            }
          });

        case "status":
          switch (method) {
            case FilterMethod.Equals:
              return legion.status === value;
            case FilterMethod.Not:
              return legion.status !== value;
          }
          break;
      }

      return false;
    });
  });
