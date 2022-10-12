import { style } from "@vanilla-extract/css";

enum FontFamily {
  sans = 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  serif = 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  mono = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
}

export const fontFamily = {
  sans: style({
    fontFamily: FontFamily.sans,
  }),
  serif: style({
    fontFamily: FontFamily.serif,
  }),
  mono: style({
    fontFamily: FontFamily.mono,
  }),
};

export const fontFamilyProperties = {
  fontFamily: FontFamily,
};

export const fontFamilyShorthands = {};
