import { className } from "../styles/lib";
import {
  bg,
  box,
  boxShadow,
  fontSize,
  fontWeight,
  lineHeight,
  ml,
  px,
  py,
  rounded,
  w,
} from "../styles/utils";

export const Card: React.FC<{
  children: React.ReactNode;
  title?: string;
  sectioned?: boolean;
  shadow?: boolean;
}> = ({ children, title = "", sectioned = false, shadow = false }) => {
  return (
    <div
      className={className(
        box.border,
        bg.white,
        w.full,
        py.px20,
        rounded.px8,
        sectioned && px.px16,
        shadow && boxShadow.lg
      )}
    >
      {title !== "" && (
        <h1
          className={className(
            fontWeight.bold,
            fontSize.base,
            lineHeight.px12,
            !sectioned && ml.px16
          )}
        >
          {title}
        </h1>
      )}
      {children}
    </div>
  );
};
