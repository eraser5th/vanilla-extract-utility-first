import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties as styleProperties, shorthands } from "../../utils";

const properties = defineProperties({
  conditions: {
    required: { selector: "&:required" },
  },
  defaultCondition: "required",
  properties: styleProperties,
  shorthands,
});

export const required = createSprinkles(properties);
