import { style } from "@vanilla-extract/css";
import {
  PercentUnit,
  percentUnitKeys,
  PxUnit,
  pxUnitKeys,
} from "../../constants";

enum HeightKeyword {
  screen = "100vh",
  min = "min-content",
  max = "max-content",
  fit = "fit-content",
}

const heightKeywordKeys = ["screen", "min", "max", "fit"] as const;

type HeightStyles = Record<
  | typeof pxUnitKeys[number]
  | typeof percentUnitKeys[number]
  | typeof heightKeywordKeys[number],
  string
>;

const partialW: Partial<HeightStyles> = {};

pxUnitKeys.forEach((pxUnitKey) => {
  partialW[pxUnitKey] = style({
    height: pxUnitKey,
  });
});

percentUnitKeys.forEach((percentUnitKey) => {
  partialW[percentUnitKey] = style({
    height: PercentUnit[percentUnitKey],
  });
});

heightKeywordKeys.forEach((heightKeywordKey) => {
  partialW[heightKeywordKey] = style({
    height: HeightKeyword[heightKeywordKey],
  });
});
export const h: HeightStyles = partialW as HeightStyles;

export const heightProperties = {
  height: {
    ...PercentUnit,
    ...PxUnit,
  },
};

export const heightShorthands = {
  h: ["height"] as ["height"],
};
