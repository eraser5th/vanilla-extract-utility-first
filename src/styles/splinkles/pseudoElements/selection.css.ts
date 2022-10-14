import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties, shorthands } from "../../utils";

const sprinkleProperties = defineProperties({
  conditions: {
    selection: { selector: "&::selection" },
  },
  defaultCondition: "selection",
  properties,
  shorthands,
});

export const selection = createSprinkles(sprinkleProperties);
