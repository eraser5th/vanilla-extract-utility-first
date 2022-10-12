import { style } from "@vanilla-extract/css";

enum ListStyleType {
  none = "none",
  disc = "disc",
  decimal = "decimal",
}

export const list = {
  none: style({
    listStyleType: ListStyleType.none,
  }),
  disc: style({
    listStyleType: ListStyleType.disc,
  }),
  decimal: style({
    listStyleType: ListStyleType.decimal,
  }),
};

export const listStyleProperties = {
  listStyleType: ListStyleType,
};

export const listStyleShorthands = {
  list: ["listStyleType"] as ["listStyleType"],
};
