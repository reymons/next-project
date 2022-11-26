import { AsFC } from "@custom-types/as.d";

const LayoutBase: AsFC = ({ as: As = "div", ...rest }) => {
  return <As {...rest} />;
};

export default LayoutBase;
