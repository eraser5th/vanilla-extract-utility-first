import { style } from "@vanilla-extract/css";

enum LineHeight {
  px12 = "12px",
  px16 = "16px",
  px20 = "20px",
  px24 = "24px",
  px28 = "28px",
  px32 = "32px",
  px36 = "36px",
  px40 = "40px",
  none = 1,
  tight = 1.25,
  snug = 1.375,
  normal = 1.5,
  relaxed = 1.625,
  loose = 2,
}

const keys = [
  "px12",
  "px16",
  "px20",
  "px24",
  "px28",
  "px32",
  "px36",
  "px40",
  "none",
  "tight",
  "snug",
  "normal",
  "relaxed",
  "loose",
] as const;

type LeadingStyles = Record<typeof keys[number], string>;

export const lineHeight: LeadingStyles = keys
  .map((key) => ({
    [key]: style({
      fontWeight: LineHeight[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as LeadingStyles;

export const lineHeightProperties = {
  lineHeight: LineHeight,
};

export const lineHeightShorthands = {};
