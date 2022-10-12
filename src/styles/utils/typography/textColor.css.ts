import { style } from "@vanilla-extract/css";
import { colorLevels, colorNames, Colors } from "../../constants";

enum TextColorKeyword {
  inherit = "inherit",
  current = "currentColor",
  transparent = "transparent",
}

Colors;

export const keywordStyles = {
  inherit: style({
    color: TextColorKeyword.inherit,
  }),
  current: style({
    color: TextColorKeyword.current,
  }),
  transparent: style({
    color: TextColorKeyword.transparent,
  }),
};

type RgbStyles = Record<keyof typeof Colors, string>;

const partialRgbStyles: Partial<RgbStyles> = {
  black: style({
    backgroundColor: Colors.black,
  }),
  white: style({
    backgroundColor: Colors.white,
  }),
};

colorNames.forEach((cl) => {
  colorLevels.forEach((lv) => {
    partialRgbStyles[`${cl}${lv}`] = style({
      color: Colors[`${cl}${lv}`],
    });
  });
});

export const textColor = {
  ...keywordStyles,
  ...(partialRgbStyles as RgbStyles),
};

export const textColorProperties = {
  color: {
    ...TextColorKeyword,
    ...Colors,
  },
};

export const textColorShorthands = {
  textColor: ["textColor"] as ["textColor"],
};
