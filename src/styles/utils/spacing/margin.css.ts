import { style } from "@vanilla-extract/css";
import { PxUnit, pxUnitKeys } from "../../constants/pxUnits";

const keys = [...pxUnitKeys, "auto"] as const;

type Styles = Record<typeof keys[number], string>;

export const m = [
  pxUnitKeys.map((key) => ({
    [key]: style({
      margin: PxUnit[key],
    }),
  })),
  {
    auto: style({
      margin: "auto",
    }),
  },
].reduce((a, b) => ({ ...a, ...b })) as Styles;

export const mt = [
  pxUnitKeys.map((key) => ({
    [key]: style({
      marginTop: PxUnit[key],
    }),
  })),
  {
    auto: style({
      marginTop: "auto",
    }),
  },
].reduce((a, b) => ({ ...a, ...b })) as Styles;

export const mr = [
  pxUnitKeys.map((key) => ({
    [key]: style({
      marginRight: PxUnit[key],
    }),
  })),
  {
    auto: style({
      marginRight: "auto",
    }),
  },
].reduce((a, b) => ({ ...a, ...b })) as Styles;

export const mb = [
  pxUnitKeys.map((key) => ({
    [key]: style({
      marginBottom: PxUnit[key],
    }),
  })),
  {
    auto: style({
      marginBottom: "auto",
    }),
  },
].reduce((a, b) => ({ ...a, ...b })) as Styles;

export const ml = [
  pxUnitKeys.map((key) => ({
    [key]: style({
      marginLeft: PxUnit[key],
    }),
  })),
  {
    auto: style({
      marginLeft: "auto",
    }),
  },
].reduce((a, b) => ({ ...a, ...b })) as Styles;

export const mx = keys
  .map((pxUnitKey) => {
    return {
      [pxUnitKey]: style([ml[pxUnitKey], mr[pxUnitKey]]),
    };
  })
  .reduce((a, b) => ({
    ...a,
    ...b,
  })) as Styles;

export const my = pxUnitKeys
  .map((pxUnitKey) => {
    return {
      [pxUnitKey]: style([mt[pxUnitKey], mb[pxUnitKey]]),
    };
  })
  .reduce((a, b) => ({
    ...a,
    ...b,
  })) as Styles;

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
