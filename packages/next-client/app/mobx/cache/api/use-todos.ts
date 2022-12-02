import { todosKey } from "../keys";
import useSWR from "../use-swr";

const fetchTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then(res =>
    res.json()
  );
};

const useTodos = () => {
  const result = useSWR(todosKey(), fetchTodos, {
    refreshInterval: 120000,
    revalidateOnMount: false
  });
  return { ...result, todos: result.data };
};

export default useTodos;
