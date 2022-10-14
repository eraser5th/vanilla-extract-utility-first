import { style } from "@vanilla-extract/css";

enum TransitionProperty {
  none = "none",
  all = "all",
  colors = "color, background-color, border-color, text-decoration-color",
  opacity = "opacity",
  shadow = "shadow",
  transform = "transform",
}
const keys = [
  "none",
  "all",
  "colors",
  "opacity",
  "shadow",
  "transform",
] as const;

type Styles = Record<typeof keys[number], string>;

export const transition = keys
  .map((key) => ({
    [key]: style({
      transitionProperty: TransitionProperty[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as Styles;

export const transitionPropertyProperties = {
  transitionProperty: TransitionProperty,
};

export const transitionPropertyShorthands = {
  transition: ["transitionProperty"] as ["transitionProperty"],
};
