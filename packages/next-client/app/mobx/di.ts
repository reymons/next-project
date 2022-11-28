import { RootStore } from "./initialization";

const InjectRootMethod = Symbol("InjectRoot");

class Store {
  protected root: RootStore = {} as RootStore;

  [InjectRootMethod](root: RootStore) {
    this.root = root;
  }
}

export { InjectRootMethod };

export default Store;
