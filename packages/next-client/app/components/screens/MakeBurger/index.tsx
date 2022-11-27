import Header from "@components/layout/Header";
import LayoutBase from "@components/layout/LayoutBase";
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
    <>
      <Header />
      {page}
    </>
  );
};

export default MakeBurger;
