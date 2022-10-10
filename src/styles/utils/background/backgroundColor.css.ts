import { style } from "@vanilla-extract/css";
import { Colors, colorNames, colorLevels } from "../../constants/colors";

enum BackgroundColorKeywords {
  inherit = "inheirit",
  current = "currentColor",
  transparent = "transparent",
}

export const inherit = style({
  backgroundColor: BackgroundColorKeywords.inherit,
});

export const current = style({
  backgroundColor: BackgroundColorKeywords.current,
});

export const transparent = style({
  backgroundColor: BackgroundColorKeywords.transparent,
});

const keywordStyles = {
  inherit,
  current,
  transparent,
};

const rgbStyles: any = {
  black: style({
    backgroundColor: Colors.black,
  }),
  white: style({
    backgroundColor: Colors.white,
  }),
};

colorNames.forEach((cl) => {
  colorLevels.forEach((lv) => {
    rgbStyles[`${cl}${lv}`] = style({
      backgroundColor: Colors[`${cl}${lv}`],
    });
  });
});

const typedRgbStyles: Record<keyof typeof Colors, string> = {
  ...rgbStyles,
};

export const backgroundColor = {
  ...keywordStyles,
  ...typedRgbStyles,
};

export const bgColor = backgroundColor;

export const backgroundColorProperties = {
  backgroundColor: {
    ...BackgroundColorKeywords,
    ...Colors,
  },
};

export const backgroundColorShorthands = {
  bgColor: ["backgroundColor"] as ["backgroundColor"],
};
