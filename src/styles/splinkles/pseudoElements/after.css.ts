import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties as styleProperties, shorthands } from "../../utils";

const properties = defineProperties({
  conditions: {
    after: { selector: "&::after" },
  },
  defaultCondition: "after",
  properties: styleProperties,
  shorthands,
});

export const after = createSprinkles(properties);
