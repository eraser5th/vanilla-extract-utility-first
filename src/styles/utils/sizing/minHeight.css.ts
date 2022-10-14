import { style } from "@vanilla-extract/css";

enum MinHeight {
  px0 = "0px",
  full = "100%",
  screen = "100vh",
  min = "min-content",
  max = "max-content",
  fit = "fit-content",
}

const keys = ["px0", "full", "screen", "min", "max", "fit"] as const;

type Styles = Record<typeof keys[number], string>;

export const minH = keys
  .map((key) => ({
    [key]: style({ minHeight: MinHeight[key] }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as Styles;

export const minHeightProperties = {
  minHeight: MinHeight,
};

export const minHeightShorthands = {
  minH: ["minHeight"] as ["minHeight"],
};
