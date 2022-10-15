import { className } from "../styles/lib";
import { minH, w } from "../styles/utils";

export const Page: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className={className(w.full, minH.screen)}>{children}</div>;
};
