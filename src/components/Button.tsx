import { className } from "../styles/lib";
import { w } from "../styles/utils";
import { button } from "./Button.css";

export const Button: React.FC<{
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  fill?: boolean;
}> = ({ label, onClick = () => {}, fill = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className(button, fill && w.full)}
    >
      {label}
    </button>
  );
};
