import { observer } from "mobx-react-lite";
import Header from "@components/layout/Header";
import { LayoutFC } from "@custom-types/component";
import Screen from "@components/layout/Screen";
import { Container, Image, ImageWrapper, MakeBurgerLink } from "./index.styles";
import Main from "@components/layout/Main";
import ScreenMainText from "@components/shared/ScreenMainText";
import Footer from "@components/layout/Footer";
import { MAKE_BURGER_ROUTE } from "@dictionaries/routes";

const Home: LayoutFC = () => {
  return (
    <Container>
      <ScreenMainText />
      <ImageWrapper>
        <MakeBurgerLink href={MAKE_BURGER_ROUTE}>
          {"Make\nBurger"}
        </MakeBurgerLink>
        <Image
          src="/images/big-burger.png"
          alt="big-burger"
          width={1000}
          height={1000}
          priority
        />
      </ImageWrapper>
    </Container>
  );
};

Home.getLayout = ({ page }) => {
  return (
    <Screen pageTitle="Home" fixedHeight adjustToHeader>
      <Header />
      <Main>{page}</Main>
      <Footer />
    </Screen>
  );
};

export default observer(Home);
