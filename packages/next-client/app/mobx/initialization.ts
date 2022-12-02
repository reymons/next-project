import { enableStaticRendering } from "mobx-react-lite";
import { InjectRootMethod } from "./di";
import CounterStore from "./stores/counter-store";

export type RootStore = ReturnType<typeof getStoreInstances>;

const isServer = typeof window === "undefined";

let rootStore: RootStore;

enableStaticRendering(isServer);

function getStoreInstances() {
  return {
    counterStore: new CounterStore()
  };
}

function injectData(rootStore: RootStore) {
  Object.values(rootStore).forEach(store => {
    store[InjectRootMethod](rootStore);
  });
}

export function createRootStore() {
  if (rootStore && !isServer) return rootStore;
  rootStore = getStoreInstances();
  injectData(rootStore);
  return rootStore;
}
