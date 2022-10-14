import { style } from "@vanilla-extract/css";
import { Colors, colors } from "../../constants";

type Styles = Record<typeof colors[number], string>;

export const textColor = colors
  .map((color) => ({
    [color]: style({
      color: Colors[color],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as Styles;

export const textColorProperties = {
  color: Colors,
};

export const textColorShorthands = {
  textColor: ["color"] as ["color"],
};
