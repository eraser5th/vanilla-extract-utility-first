import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties, shorthands } from "../utils";

const focusPropertie = defineProperties({
  conditions: {
    hover: { selector: "&:focus" },
  },
  defaultCondition: "hover",
  properties,
  shorthands,
});

export const focus = createSprinkles(focusPropertie);
