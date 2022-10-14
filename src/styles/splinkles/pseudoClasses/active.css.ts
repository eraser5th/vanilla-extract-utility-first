import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties, shorthands } from "../../utils";

const sprinkleProperties = defineProperties({
  conditions: {
    active: { selector: "&:active" },
  },
  defaultCondition: "active",
  properties,
  shorthands,
});

export const active = createSprinkles(sprinkleProperties);
