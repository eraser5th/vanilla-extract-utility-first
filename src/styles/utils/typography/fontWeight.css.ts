import { style } from "@vanilla-extract/css";

enum FontWeight {
  thin = 100,
  extralight = 200,
  light = 300,
  normal = 400,
  medium = 500,
  semibold = 600,
  bold = 700,
  extrabold = 800,
  black = 900,
}

const keys = [
  "thin",
  "extralight",
  "light",
  "normal",
  "medium",
  "semibold",
  "bold",
  "extrabold",
  "black",
] as const;

type FontSizeStyles = Record<typeof keys[number], string>;

export const fontWeight: FontSizeStyles = keys
  .map((key) => ({
    [key]: style({
      fontWeight: FontWeight[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as FontSizeStyles;

export const fontWeightProperties = {
  fontWeight: FontWeight,
};

export const fontWeightShorthands = {};
