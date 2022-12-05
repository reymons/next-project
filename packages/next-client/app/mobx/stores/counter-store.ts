import { makeAutoObservable } from "mobx";
import { RootStore } from "@mobx/initialization";

class CounterStore {
  private global = {} as RootStore;
  count = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

export default CounterStore;
