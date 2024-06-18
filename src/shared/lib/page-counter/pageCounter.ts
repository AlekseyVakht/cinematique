import { makeAutoObservable } from "mobx";

class PageCounter {
  page = 1;

  constructor() {
    makeAutoObservable(this);
  }

  incrementPage() {
    this.page += 1;
    console.log(this.page);
  }
}

export const pageCounter = new PageCounter();
