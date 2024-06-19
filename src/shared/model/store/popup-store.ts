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

  setIsClose() {
    this.isOpened = false;
  }
}

export const popupStore = new PopupStore();
