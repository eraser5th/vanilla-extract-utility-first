import { style } from "@vanilla-extract/css";

enum FlexWrap {
  wrap = "wrap",
  wrapReverse = "wrap-reverse",
  nowrap = "nowrap",
}

const keys = ["wrap", "wrapReverse", "nowrap"] as const;

type Styles = Record<typeof keys[number], string>;

export const flexWrap = keys
  .map((key) => ({
    [key]: style({
      flexWrap: FlexWrap[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as Styles;

export const flexWrapProperties = {
  flexWrap: FlexWrap,
};

export const flexWrapShorthands = {};
