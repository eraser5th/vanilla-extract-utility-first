import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties as styleProperties, shorthands } from "../../utils";

const properties = defineProperties({
  conditions: {
    selection: { selector: "&::selection" },
  },
  defaultCondition: "selection",
  properties: styleProperties,
  shorthands,
});

export const selection = createSprinkles(properties);
