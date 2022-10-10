import { style } from "@vanilla-extract/css";
import {
  PercentUnit,
  percentUnitKeys,
  PxUnit,
  pxUnitKeys,
} from "../../constants";

type WidthStyles = Record<
  typeof pxUnitKeys[number] | typeof percentUnitKeys[number],
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
