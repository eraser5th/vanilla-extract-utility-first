import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties as styleProperties, shorthands } from "../../utils";

const properties = defineProperties({
  conditions: {
    before: { selector: "&::before" },
  },
  defaultCondition: "before",
  properties: styleProperties,
  shorthands,
});

export const before = createSprinkles(properties);
