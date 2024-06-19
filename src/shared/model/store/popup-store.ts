import { makeAutoObservable } from "mobx";

class PopupStore {
  isOpened: boolean;

  constructor() {
    makeAutoObservable(this);
    this.isOpened = false;
  }

  changeIsOpened() {
    this.isOpened = !this.isOpened;
  }
}

export const popupStore = new PopupStore();
