import { enableStaticRendering } from "mobx-react-lite";
import { InjectRootMethod } from "./di";
import CounterStore from "./stores/counter-store";

enableStaticRendering(typeof window === "undefined");

let isInitialized = false;

function createRootStore() {
  if (isInitialized) {
    throw new Error("RootStore has already been initialized!");
  }

  const rootStore = {
    counterStore: new CounterStore()
  };

  Object.values(rootStore).forEach(store => {
    store[InjectRootMethod](rootStore);
  });

  isInitialized = true;

  return rootStore;
}

type RootStore = ReturnType<typeof createRootStore>;

export { createRootStore, type RootStore };
