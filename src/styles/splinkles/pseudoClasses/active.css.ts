import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties as styleProperties, shorthands } from "../../utils";

const properties = defineProperties({
  conditions: {
    active: { selector: "&:active" },
  },
  defaultCondition: "active",
  properties: styleProperties,
  shorthands,
});

export const active = createSprinkles(properties);
