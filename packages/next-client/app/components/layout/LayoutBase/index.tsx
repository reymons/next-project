import { ChildrenFC } from "@custom-types/component";
import { LayoutBaseStyled, StyledProps } from "./index.styles";

const LayoutBase: ChildrenFC<StyledProps> = ({ children, flexGrow }) => {
  return <LayoutBaseStyled flexGrow={flexGrow}>{children}</LayoutBaseStyled>;
};

export default LayoutBase;
