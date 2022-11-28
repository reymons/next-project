import { action, observable } from "mobx";
import Store from "../di";

class CounterStore extends Store {
  @observable private _count = 0;

  get count() {
    return this._count;
  }

  @action increment() {
    this._count++;
  }

  @action decrement() {
    this._count--;
  }
}

export default CounterStore;
