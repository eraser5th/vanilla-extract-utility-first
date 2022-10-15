import { className } from "../styles/lib";
import { display, flexDirection } from "../styles/utils";
import { gap as gapStyle } from "../styles/utils/flexbox_grid/gap.css";

export const Stack: React.FC<{
  children: React.ReactNode;
  vertical?: boolean;
  gap?: keyof typeof gapStyle;
}> = ({ children, vertical = false, gap = "px0" }) => {
  return (
    <div
      className={className(
        display.flex,
        vertical && flexDirection.col,
        gapStyle[gap]
      )}
    >
      {children}
    </div>
  );
};
