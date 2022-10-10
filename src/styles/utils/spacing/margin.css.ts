import { style } from "@vanilla-extract/css";
import { PxUnit, pxUnitKeys } from "../../constants/pxUnits";

type MarginStyles = Record<typeof pxUnitKeys[number], string>;

const partialM: Partial<MarginStyles> = {};

pxUnitKeys.forEach((pxUnitKey) => {
  partialM[pxUnitKey] = style({
    margin: PxUnit[pxUnitKey],
  });
});

export const m: MarginStyles = partialM as MarginStyles;

const partialMl: Partial<MarginStyles> = {};

pxUnitKeys.forEach((pxUnitKey) => {
  partialMl[pxUnitKey] = style({
    marginLeft: PxUnit[pxUnitKey],
  });
});

export const ml: MarginStyles = partialMl as MarginStyles;

const partialMr: Partial<MarginStyles> = {};

pxUnitKeys.forEach((pxUnitKey) => {
  partialMr[pxUnitKey] = style({
    marginRight: PxUnit[pxUnitKey],
  });
});

export const mr: MarginStyles = partialMr as MarginStyles;

const partialMt: Partial<MarginStyles> = {};

pxUnitKeys.forEach((pxUnitKey) => {
  partialMt[pxUnitKey] = style({
    marginTop: PxUnit[pxUnitKey],
  });
});

export const mt: MarginStyles = partialMt as MarginStyles;

const partialMb: Partial<MarginStyles> = {};

pxUnitKeys.forEach((pxUnitKey) => {
  partialMb[pxUnitKey] = style({
    marginBottom: PxUnit[pxUnitKey],
  });
});

export const mb: MarginStyles = partialMb as MarginStyles;

export const mx: MarginStyles = pxUnitKeys
  .map((pxUnitKey) => {
    return {
      [pxUnitKey]: style([ml[pxUnitKey], mr[pxUnitKey]]),
    };
  })
  .reduce((a, b) => ({
    ...a,
    ...b,
  })) as MarginStyles;

export const my: MarginStyles = pxUnitKeys
  .map((pxUnitKey) => {
    return {
      [pxUnitKey]: style([mt[pxUnitKey], mb[pxUnitKey]]),
    };
  })
  .reduce((a, b) => ({
    ...a,
    ...b,
  })) as MarginStyles;

export const marginProperties = {
  margin: PxUnit,
  marginLeft: PxUnit,
  marginRight: PxUnit,
  marginTop: PxUnit,
  marginBottom: PxUnit,
};

export const marginShorthands = {
  m: ["margin"] as ["margin"],
  mx: ["marginLeft", "marginRight"] as ["marginLeft", "marginRight"],
  my: ["marginTop", "marginBottom"] as ["marginTop", "marginBottom"],
  ml: ["marginLeft"] as ["marginLeft"],
  mr: ["marginRight"] as ["marginRight"],
  mt: ["marginTop"] as ["marginTop"],
  mb: ["marginBottom"] as ["marginBottom"],
};
