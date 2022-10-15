import {
  flexDirection,
  flexDirectionProperties,
  flexDirectionShorthands,
} from "./flexDirection.css";
import { gapProperties, gapShorthands } from "./gap.css";

export * from "./flexDirection.css";

export const flexbox_gridProperties = {
  ...flexDirectionProperties,
  ...gapProperties,
};

export const flexbox_gridShorthands = {
  ...flexDirectionShorthands,
  ...gapShorthands,
};

export const flex = {
  ...flexDirection,
};
