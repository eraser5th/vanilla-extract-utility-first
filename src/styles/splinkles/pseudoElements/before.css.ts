import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties, shorthands } from "../../utils";

const sprinkleProperties = defineProperties({
  conditions: {
    before: { selector: "&::before" },
  },
  defaultCondition: "before",
  properties,
  shorthands,
});

export const before = createSprinkles(sprinkleProperties);
