import LayoutBase from "@components/layout/LayoutBase";
import Header from "@components/layout/Header";
import { LayoutFC } from "@custom-types/component";

const Home: LayoutFC = () => {
  return (
    <>
      <LayoutBase>Hello, World!</LayoutBase>
    </>
  );
};

Home.getLayout = ({ page }) => {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export default Home;
