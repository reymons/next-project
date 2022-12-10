import Image from "next/image";
import Nav from "./Nav";
import Logo from "svg/logo.svg";
import {
  ContactPseudoBtn,
  Contacts,
  HeaderStyled,
  HumanImage,
  Layout,
  Phone,
  PhoneIcon
} from "./index.styles";

const Header = () => {
  return (
    <HeaderStyled>
      <Layout>
        <Logo />
        <Nav />
        <Contacts>
          <ContactPseudoBtn>
            <PhoneIcon /> Call me back
          </ContactPseudoBtn>
          <Phone>8 800 437-87-22</Phone>
          <HumanImage>
            <Image src="/images/human.png" width={24} height={24} alt="Human" />
          </HumanImage>
        </Contacts>
      </Layout>
    </HeaderStyled>
  );
};

export default Header;
