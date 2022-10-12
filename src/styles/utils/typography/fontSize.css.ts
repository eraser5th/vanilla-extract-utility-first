import { style } from "@vanilla-extract/css";

enum FontSize {
  xs = "0.75rem",
  sm = "0.875rem",
  base = "1rem",
  lg = "1.125rem",
  xl = "1.25rem",
  "2xl" = "1.5rem",
  "3xl" = "1.875rem",
  "4xl" = "2.25rem",
  "5xl" = "3rem",
  "6xl" = "3.75rem",
  "7xl" = "4.5rem",
  "8xl" = "6rem",
  "9xl" = "8rem",
}

const keys = [
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
  "9xl",
] as const;

type FontSizeStyles = Record<typeof keys[number], string>;

export const fontSize: FontSizeStyles = keys
  .map((key) => ({
    [key]: style({
      fontSize: FontSize[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as FontSizeStyles;

export const fontSizeProperties = {
  fontSize: FontSize,
};

export const fontSizeShorthands = {};
