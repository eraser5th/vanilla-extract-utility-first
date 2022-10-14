import { style } from "@vanilla-extract/css";

enum TransitionTimingFunction {
  linear = "linear",
  in = "cubic-bezier(0.4, 0, 1, 1)",
  out = "cubic-bezier(0, 0, 0.2, 1)",
  inOut = "cubic-bezier(0.4, 0, 0.2, 1)",
}

const keys = ["linear", "in", "out", "inOut"] as const;

type Styles = Record<typeof keys[number], string>;

export const ease = keys
  .map((key) => ({
    [key]: style({
      transitionTimingFunction: TransitionTimingFunction[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as Styles;

export const transitionTimingFunctionProperties = {
  transitionTimingFunction: TransitionTimingFunction,
};

export const transitionTimingFunctionShorthands = {
  ease: ["transitionTimingFunction"] as ["transitionTimingFunction"],
};
