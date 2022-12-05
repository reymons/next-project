import { ReactNode } from "react";
import { ChildrenFC } from "@custom-types/component";
import { LayoutBaseStyled } from "./index.styles";

type Props = {
  children: ReactNode;
};

const LayoutBase: ChildrenFC<Props> = ({ children }) => {
  return <LayoutBaseStyled>{children}</LayoutBaseStyled>;
};

export default LayoutBase;
