import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties, shorthands } from "../../utils";

const sprinkleProperties = defineProperties({
  conditions: {
    required: { selector: "&:required" },
  },
  defaultCondition: "required",
  properties,
  shorthands,
});

export const required = createSprinkles(sprinkleProperties);
