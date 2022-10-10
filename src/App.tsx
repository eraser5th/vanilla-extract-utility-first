import { app } from "./App.css";
import { className } from "./styles/lib";
import { hover } from "./styles/splinkles";
import { bg, container } from "./styles/utils";

export const App: React.FC = () => {
  return (
    <div className={app}>
      <p
        className={className(
          container.sm,
          bg.gray200,
          hover({ container: "lg", bgColor: "red200" })
        )}
      >
        {"ahoy".repeat(100)}
      </p>
    </div>
  );
};
