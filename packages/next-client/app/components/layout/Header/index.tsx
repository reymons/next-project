import Nav from "./Nav";
import Logo from "svg/logo.svg";
import { HeaderStyled } from "./index.styles";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Nav />
    </HeaderStyled>
  );
};

export default Header;
