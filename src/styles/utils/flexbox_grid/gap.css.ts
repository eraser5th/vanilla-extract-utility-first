import { style } from "@vanilla-extract/css";
import { pxUnitKeys, PxUnit } from "../../constants/pxUnits";

type Styles = Record<typeof pxUnitKeys[number], string>;

export const gap = pxUnitKeys
  .map((key) => ({
    [key]: style({
      gap: PxUnit[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as Styles;

export const gapProperties = {
  gap: PxUnit,
};

export const gapShorthands = {};
