import { observer } from "mobx-react-lite";
import LayoutBase from "@components/layout/LayoutBase";
import Header from "@components/layout/Header";
import { LayoutFC } from "@custom-types/component";
import { useStore } from "@mobx";

const Home: LayoutFC = () => {
  const { count, increment, decrement } = useStore().counterStore;
  return (
    <LayoutBase>
      <div>Count: {count}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </LayoutBase>
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

export default observer(Home);
