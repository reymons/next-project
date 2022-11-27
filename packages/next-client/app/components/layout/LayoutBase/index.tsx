import { ReactNode } from "react";
import cn from "classnames";
import { AsFC } from "@custom-types/as.d";
import sl from "./index.module.scss";

type Props = {
  children: ReactNode;
};

const LayoutBase: AsFC<Props> = ({ as: As = "div", children, ...rest }) => {
  return (
    <As {...rest} className={cn(sl.layout, rest.className)}>
      {children}
    </As>
  );
};

export default LayoutBase;
