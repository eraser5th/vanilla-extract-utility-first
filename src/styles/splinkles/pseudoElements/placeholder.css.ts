import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties as styleProperties, shorthands } from "../../utils";

const properties = defineProperties({
  conditions: {
    placeholder: { selector: "&::placeholder" },
  },
  defaultCondition: "placeholder",
  properties: styleProperties,
  shorthands,
});

export const placeholder = createSprinkles(properties);
