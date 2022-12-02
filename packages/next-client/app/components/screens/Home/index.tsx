import { observer } from "mobx-react-lite";
import LayoutBase from "@components/layout/LayoutBase";
import Header from "@components/layout/Header";
import { LayoutFC } from "@custom-types/component";
import useTodos from "@mobx/cache/api/use-todos";

const Home: LayoutFC = () => {
  const { todos, isLoading, error } = useTodos();

  return (
    <>
      <LayoutBase>Hello, World!</LayoutBase>
      {isLoading ? (
        <p>Loading todos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {todos?.map((todo: any) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
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

export default observer(Home);
