import { style } from "@vanilla-extract/css";
import { PxUnit, pxUnitKeys } from "../../constants/pxUnits";

type PaddingStyles = Record<typeof pxUnitKeys[number], string>;

const partialP: Partial<PaddingStyles> = {};

pxUnitKeys.forEach((pxUnitKey) => {
  partialP[pxUnitKey] = style({
    padding: PxUnit[pxUnitKey],
  });
});

export const p: PaddingStyles = partialP as PaddingStyles;

const partialPl: Partial<PaddingStyles> = {};

pxUnitKeys.forEach((pxUnitKey) => {
  partialPl[pxUnitKey] = style({
    paddingLeft: PxUnit[pxUnitKey],
  });
});

export const pl: PaddingStyles = partialPl as PaddingStyles;

const partialPr: Partial<PaddingStyles> = {};

pxUnitKeys.forEach((pxUnitKey) => {
  partialPr[pxUnitKey] = style({
    paddingRight: PxUnit[pxUnitKey],
  });
});

export const pr: PaddingStyles = partialPr as PaddingStyles;

const partialPt: Partial<PaddingStyles> = {};

pxUnitKeys.forEach((pxUnitKey) => {
  partialPt[pxUnitKey] = style({
    paddingTop: PxUnit[pxUnitKey],
  });
});

export const pt: PaddingStyles = partialPt as PaddingStyles;

const partialPb: Partial<PaddingStyles> = {};

pxUnitKeys.forEach((pxUnitKey) => {
  partialPb[pxUnitKey] = style({
    paddingBottom: PxUnit[pxUnitKey],
  });
});

export const pb: PaddingStyles = partialPb as PaddingStyles;

export const px: PaddingStyles = pxUnitKeys
  .map((pxUnitKey) => {
    const a = {
      [pxUnitKey]: style([pl[pxUnitKey], pr[pxUnitKey]]),
    };
    return a;
  })
  .reduce((a, b) => ({
    ...a,
    ...b,
  })) as PaddingStyles;

export const py: PaddingStyles = pxUnitKeys
  .map((pxUnitKey) => {
    const a = {
      [pxUnitKey]: style([pt[pxUnitKey], pb[pxUnitKey]]),
    };
    return a;
  })
  .reduce((a, b) => ({
    ...a,
    ...b,
  })) as PaddingStyles;

export const paddingProperties = {
  padding: PxUnit,
  paddingLeft: PxUnit,
  paddingRight: PxUnit,
  paddingTop: PxUnit,
  paddingBottom: PxUnit,
};

export const paddingShorthands = {
  p: ["padding"] as ["padding"],
  px: ["paddingLeft", "paddingRight"] as ["paddingLeft", "paddingRight"],
  py: ["paddingTop", "paddingBottom"] as ["paddingTop", "paddingBottom"],
  pl: ["paddingLeft"] as ["paddingLeft"],
  pr: ["paddingRight"] as ["paddingRight"],
  pt: ["paddingTop"] as ["paddingTop"],
  pb: ["paddingBottom"] as ["paddingBottom"],
} as const;
