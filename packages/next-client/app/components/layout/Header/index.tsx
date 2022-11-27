import LayoutBase from "../LayoutBase";
import Nav from "./Nav";
import Logo from "svg/logo.svg";
import sl from "./index.module.scss";

const Header = () => {
  return (
    <LayoutBase className={sl.header} as="header">
      <Logo />
      <Nav />
    </LayoutBase>
  );
};

export default Header;
