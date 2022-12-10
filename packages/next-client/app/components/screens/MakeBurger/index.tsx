import Header from "@components/layout/Header";
import LayoutBase from "@components/layout/LayoutBase";
import Screen from "@components/layout/Screen";
import { LayoutFC } from "@custom-types/component";

const MakeBurger: LayoutFC = () => {
  return (
    <>
      <LayoutBase>Make Burger</LayoutBase>
    </>
  );
};

MakeBurger.getLayout = ({ page }) => {
  return (
    <Screen pageTitle="Make a burger">
      <Header />
      {page}
    </Screen>
  );
};

export default MakeBurger;
