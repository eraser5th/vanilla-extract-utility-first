import { style } from "@vanilla-extract/css";
import {
  PercentUnit,
  percentUnitKeys,
  PxUnit,
  pxUnitKeys,
} from "../../constants";

enum WidthKeyword {
  screen = "100vw",
  min = "min-content",
  max = "max-content",
  fit = "fit-content",
}

const widthKeywordKeys = ["screen", "min", "max", "fit"] as const;

type WidthStyles = Record<
  | typeof pxUnitKeys[number]
  | typeof percentUnitKeys[number]
  | typeof widthKeywordKeys[number],
  string
>;

const partialW: Partial<WidthStyles> = {};

pxUnitKeys.forEach((pxUnitKey) => {
  partialW[pxUnitKey] = style({
    width: pxUnitKey,
  });
});

percentUnitKeys.forEach((percentUnitKey) => {
  partialW[percentUnitKey] = style({
    width: PercentUnit[percentUnitKey],
  });
});

widthKeywordKeys.forEach((widthKeywordKey) => {
  partialW[widthKeywordKey] = style({
    width: WidthKeyword[widthKeywordKey],
  });
});
export const w: WidthStyles = partialW as WidthStyles;

export const widthProperties = {
  width: {
    ...PercentUnit,
    ...PxUnit,
  },
};

export const widthShorthands = {
  w: ["width"] as ["width"],
};
