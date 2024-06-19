import { makeAutoObservable } from "mobx";

class QueryStore {
  query: string;
  key: string;

  constructor() {
    makeAutoObservable(this);
    this.query = "";
    this.key = "films";
  }

  setQuery(param: string) {
    this.query = param;
  }

  setKey(key: string) {
    this.key = key;
  }
}

export const queryStore = new QueryStore();
