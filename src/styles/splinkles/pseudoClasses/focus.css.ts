import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { properties, shorthands } from "../../utils";

const sprinkleProperties = defineProperties({
  conditions: {
    focus: { selector: "&:focus" },
  },
  defaultCondition: "focus",
  properties,
  shorthands,
});

export const focus = createSprinkles(sprinkleProperties);
