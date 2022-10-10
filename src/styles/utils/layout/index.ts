export * from "./aspect.css";
export * from "./boxSizing.css";
export * from "./container.css";
export * from "./display.css";
export * from "./float.css";
export * from "./overflow.css";
export * from "./position.css";

import { aspectRatioProperties, aspectRatioShorthands } from "./aspect.css";
import { boxSizingProperties, boxSizingShorthands } from "./boxSizing.css";
import { containerProperties, containerShorthands } from "./container.css";
import { displayProperties, displayShorthands } from "./display.css";
import { floatProperties, floatShorthands } from "./float.css";
import { overflowProperties, overflowShorthands } from "./overflow.css";
import { positionProperties, positionShorthands } from "./position.css";

export const layoutProperties = {
  ...aspectRatioProperties,
  ...containerProperties,
  ...boxSizingProperties,
  ...displayProperties,
  ...floatProperties,
  ...overflowProperties,
  ...positionProperties,
};

export const layoutShorthands = {
  ...aspectRatioShorthands,
  ...containerShorthands,
  ...boxSizingShorthands,
  ...displayShorthands,
  ...floatShorthands,
  ...overflowShorthands,
  ...positionShorthands,
};
