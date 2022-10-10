import {
  aspect,
  aspectRatioProperties,
  aspectRatioShorthands,
} from "./aspect.css";
import {
  container,
  containerProperties,
  containerShorthands,
} from "./container.css";

export { aspect, container };

export const layoutProperties = {
  ...aspectRatioProperties,
  ...containerProperties,
};

export const layoutShorthands = {
  ...aspectRatioShorthands,
  ...containerShorthands,
};
