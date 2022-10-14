import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties, shorthands } from "../../utils";

const sprinkleProperties = defineProperties({
  conditions: {
    placeholder: { selector: "&::placeholder" },
  },
  defaultCondition: "placeholder",
  properties,
  shorthands,
});

export const placeholder = createSprinkles(sprinkleProperties);
