import { app } from "./App.css";
import { className } from "./styles/lib";
import { hover } from "./styles/splinkles";
import { bg, box, container, px, py } from "./styles/utils";

export const App: React.FC = () => {
  return (
    <div className={app}>
      <p
        className={className(
          container.sm,
          bg.gray200,
          px.px20,
          py.px40,
          box.border,
          hover({
            container: "lg",
            bgColor: "red200",
            m: "px32",
            mx: "px64",
            p: "px68",
          })
        )}
      >
        {"ahoy".repeat(100)}
      </p>
    </div>
  );
};
