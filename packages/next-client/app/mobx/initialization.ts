import { enableStaticRendering } from "mobx-react-lite";
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

export function injectData(rootStore: RootStore) {
  Object.values(rootStore).forEach(store => {
    if ("global" in store) {
      // @ts-ignore
      store.global = rootStore;
    }
  });
}

export function createRootStore() {
  if (rootStore && !isServer) return rootStore;
  rootStore = getStoreInstances();
  injectData(rootStore);
  return rootStore;
}
