import { style } from "@vanilla-extract/css";
import { Colors, colors } from "../../constants/colors";

type BackgroundColor = Record<typeof colors[number], string>;

export const bgColor = colors
  .map((color) => ({
    [color]: style({
      backgroundColor: Colors[color],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BackgroundColor;

export const backgroundColorProperties = {
  backgroundColor: Colors,
};

export const backgroundColorShorthands = {
  bgColor: ["backgroundColor"] as ["backgroundColor"],
};
