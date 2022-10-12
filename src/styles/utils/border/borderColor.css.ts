import { style } from "@vanilla-extract/css";
import { colors, Colors } from "../../constants";

type BorderColorStyles = Record<keyof typeof Colors, string>;

const normal = colors
  .map((color) => ({
    [color]: style({
      borderColor: Colors[color],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderColorStyles;

const t = colors
  .map((color) => ({
    [color]: style({
      borderTopColor: Colors[color],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderColorStyles;

const l = colors
  .map((color) => ({
    [color]: style({
      borderLeftColor: Colors[color],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderColorStyles;

const b = colors
  .map((color) => ({
    [color]: style({
      borderBottomColor: Colors[color],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderColorStyles;

const r = colors
  .map((color) => ({
    [color]: style({
      borderRightColor: Colors[color],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderColorStyles;

const x = colors
  .map((color) => ({
    [color]: style([l[color], r[color]]),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderColorStyles;

const y = colors
  .map((color) => ({
    [color]: style([t[color], b[color]]),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderColorStyles;

export const borderColor = {
  ...normal,
  t,
  l,
  b,
  r,
  x,
  y,
};

export const borderColorProperties = {
  borderColor: Colors,
  borderRightColor: Colors,
  borderLeftColor: Colors,
  borderTopColor: Colors,
  borderBottomColor: Colors,
};

export const borderColorShorthands = {
  borderColorT: ["borderTopColor"] as ["borderTopColor"],
  borderColorL: ["borderLeftColor"] as ["borderLeftColor"],
  borderColorB: ["borderBottomColor"] as ["borderBottomColor"],
  borderColorR: ["borderRightColor"] as ["borderRightColor"],
  borderColorX: ["borderLeftColor", "borderRightColor"] as [
    "borderLeftColor",
    "borderRightColor"
  ],
  borderColorY: ["borderTopColor", "borderBottomColor"] as [
    "borderTopColor",
    "borderBottomColor"
  ],
};
