import { action, makeObservable, observable } from "mobx";
import Store from "../di";

class CounterStore extends Store {
  count = 0;

  constructor() {
    super();
    makeObservable(this, {
      count: observable,
      increment: action.bound,
      decrement: action.bound
    });
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

export default CounterStore;
