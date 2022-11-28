import { ChildrenFC } from "@custom-types/component";
import { createContext, useContext, useMemo } from "react";
import { createRootStore, RootStore } from "./initialization";

const StoreContext = createContext({} as RootStore);

const useStore = () => useContext(StoreContext);

const StoreProvider: ChildrenFC = ({ children }) => {
  const store = useMemo(() => createRootStore(), []);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { useStore, StoreProvider };
