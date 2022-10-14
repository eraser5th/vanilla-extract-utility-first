import { style } from "@vanilla-extract/css";

enum TransitionDuration {
  ms75 = "75ms",
  ms100 = "100ms",
  ms150 = "150ms",
  ms200 = "200ms",
  ms300 = "300ms",
  ms500 = "500ms",
  ms700 = "700ms",
  ms1000 = "1000ms",
}

const keys = [
  "ms75",
  "ms100",
  "ms150",
  "ms200",
  "ms300",
  "ms500",
  "ms700",
  "ms1000",
] as const;

type Styles = Record<typeof keys[number], string>;

export const duration = keys
  .map((key) => ({
    [key]: style({ transitionDuration: TransitionDuration[key] }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as Styles;

export const transitionDurationProperties = {
  transitionDuration: TransitionDuration,
};

export const transitionDurationShorthands = {
  duration: ["transitionDuration"] as ["transitionDuration"],
};
