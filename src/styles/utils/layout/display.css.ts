import { style } from "@vanilla-extract/css";

// TODO: 追加

enum Display {
  block = "block",
  inlineBlock = "inline-block",
  inline = "inline",
  flex = "flex",
  inlineFlex = "inline-flex",
  table = "table",
  inlineTable = "inline-table",
  tableCaption = "table-caption",
  tableCell = "table-cell",
  tableColumn = "table-column",
  tableColumnGroup = "table-clumn-group",
}

const block = style({
  display: Display.block,
});

const inlineBlock = style({
  display: Display.inlineBlock,
});

const inline = style({
  display: Display.inline,
});

const flex = style({
  display: Display.flex,
});

const inlineFlex = style({
  display: Display.inlineFlex,
});

export const display = {
  block,
  inlineBlock,
  inline,
  flex,
  inlineFlex,
};

export const displayProperties = {
  display: Display,
};

export const displayShorthands = {};
