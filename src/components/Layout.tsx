import { className } from "../styles/lib";
import { container, mx } from "../styles/utils";

export const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className={className(container.lg, mx.auto)}>{children}</div>;
};
