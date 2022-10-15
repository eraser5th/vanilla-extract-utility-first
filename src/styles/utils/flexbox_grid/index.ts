import {
  flexDirection,
  flexDirectionProperties,
  flexDirectionShorthands,
} from "./flexDirection.css";
import {
  flexWrap,
  flexWrapProperties,
  flexWrapShorthands,
} from "./flexWrap.css";
import { gapProperties, gapShorthands } from "./gap.css";

export * from "./flexDirection.css";

export const flexbox_gridProperties = {
  ...flexDirectionProperties,
  ...gapProperties,
  ...flexWrapProperties,
};

export const flexbox_gridShorthands = {
  ...flexDirectionShorthands,
  ...gapShorthands,
  ...flexWrapShorthands,
};

export const flex = {
  ...flexDirection,
  ...flexWrap,
};
