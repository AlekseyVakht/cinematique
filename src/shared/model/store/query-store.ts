import { makeAutoObservable } from "mobx";

import { QueryKey } from "../types";

class QueryStore {
  query: string;
  key: QueryKey;

  constructor() {
    makeAutoObservable(this);
    this.query = "";
    this.key = "films";
  }

  setQuery(param: string) {
    this.query = param;
  }

  setKey(key: QueryKey) {
    this.key = key;
  }
}

export const queryStore = new QueryStore();
