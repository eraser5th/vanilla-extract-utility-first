import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties, shorthands } from "../../utils";

const sprinkleProperties = defineProperties({
  conditions: {
    after: { selector: "&::after" },
  },
  defaultCondition: "after",
  properties,
  shorthands,
});

export const after = createSprinkles(sprinkleProperties);
