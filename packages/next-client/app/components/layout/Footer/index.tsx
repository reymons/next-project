import Link from "next/link";
import { HOME_ROUTE } from "@dictionaries/routes";
import PaymentButtons from "@components/shared/PaymentButtons";
import { FooterStyled, Layout, Text } from "./index.styles";

const Footer = () => {
  return (
    <FooterStyled>
      <Layout>
        <Text>
          {new Date().getFullYear()} Make Your Burger{"  "}
          <Link href={HOME_ROUTE}>Privacy Policy</Link>
          {"  |  "}
          <Link href={HOME_ROUTE}>Terms & Conditions</Link>
        </Text>
        <PaymentButtons />
      </Layout>
    </FooterStyled>
  );
};

export default Footer;
