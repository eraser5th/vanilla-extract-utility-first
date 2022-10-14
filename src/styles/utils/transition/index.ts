import {
  transitionDelayProperties,
  transitionDelayShorthands,
} from "./transitionDelay.css";
import {
  transitionDurationProperties,
  transitionDurationShorthands,
} from "./transitionDuration.css";
import {
  transitionPropertyProperties,
  transitionPropertyShorthands,
} from "./transitionProperty.css";
import {
  transitionTimingFunctionProperties,
  transitionTimingFunctionShorthands,
} from "./transitionTimingFunction.css";

export * from "./transitionProperty.css";
export * from "./transitionDuration.css";
export * from "./transitionTimingFunction.css";
export * from "./transitionDelay.css";

export const transitionProperties = {
  ...transitionPropertyProperties,
  ...transitionDurationProperties,
  ...transitionTimingFunctionProperties,
  ...transitionDelayProperties,
};

export const transitionShorthands = {
  ...transitionPropertyShorthands,
  ...transitionDurationShorthands,
  ...transitionTimingFunctionShorthands,
  ...transitionDelayShorthands,
};
