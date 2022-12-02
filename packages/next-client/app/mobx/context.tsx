import { ChildrenFC } from "@custom-types/component";
import { createContext, useContext } from "react";
import { createRootStore, RootStore } from "./initialization";

type StoreSelector<T> = (store: RootStore) => T;

const StoreContext = createContext({} as RootStore);

function useStore<T>(selector: StoreSelector<T>): T;
function useStore<T>(): RootStore;
function useStore<T>(selector?: StoreSelector<T>) {
  const store = useContext(StoreContext);
  return selector ? selector(store) : store;
}

const StoreProvider: ChildrenFC = ({ children }) => {
  const store = createRootStore();

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { useStore, StoreProvider };
