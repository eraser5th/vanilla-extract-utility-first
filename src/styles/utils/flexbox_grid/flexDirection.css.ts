import { style } from "@vanilla-extract/css";

enum FlexDirection {
  row = "row",
  rowReverse = "row-reverse",
  col = "column",
  colReverse = "column-reverse",
}

const keys = ["row", "rowReverse", "col", "colReverse"] as const;

type Styles = Record<typeof keys[number], string>;

export const flexDirection = keys
  .map((key) => ({
    [key]: style({ transitionDelay: FlexDirection[key] }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as Styles;

export const flexDirectionProperties = {
  flexDirection: FlexDirection,
};

export const flexDirectionShorthands = {};
