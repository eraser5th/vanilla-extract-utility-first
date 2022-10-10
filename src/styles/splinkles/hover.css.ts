import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties, shorthands } from "../utils";

const hoverPropertie = defineProperties({
  conditions: {
    hover: { selector: "&:hover" },
  },
  defaultCondition: "hover",
  properties,
  shorthands,
});

export const hover = createSprinkles(hoverPropertie);
