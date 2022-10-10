import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties as styleProperties, shorthands } from "../../utils";

const properties = defineProperties({
  conditions: {
    hover: { selector: "&:hover" },
  },
  defaultCondition: "hover",
  properties: styleProperties,
  shorthands,
});

export const hover = createSprinkles(properties);
