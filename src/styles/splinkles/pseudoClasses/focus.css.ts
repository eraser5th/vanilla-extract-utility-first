import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties as styleProperties, shorthands } from "../../utils";

const properties = defineProperties({
  conditions: {
    focus: { selector: "&:focus" },
  },
  defaultCondition: "focus",
  properties: styleProperties,
  shorthands,
});

export const focus = createSprinkles(properties);
