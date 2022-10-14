import { app } from "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
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
          hover({})
        )}
      >
        {"ahoy".repeat(100)}
      </p>
      <Card title="hi!">ahoy</Card>
      <Card title="hi!" sectioned>
        ahoy
      </Card>
      <Button label="click me!" />
      <Button label="click me!" fill />
    </div>
  );
};
