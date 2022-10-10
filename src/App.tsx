import { app } from "./App.css";
import { className } from "./styles/lib";
import { hover } from "./styles/splinkles";
import { container } from "./styles/utils";

export const App: React.FC = () => {
  return (
    <div className={app}>
      <p
        style={{ background: "red" }}
        className={className(container.sm, hover({ container: "lg" }))}
      >
        {"ahoy".repeat(100)}
      </p>
    </div>
  );
};
