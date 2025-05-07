import { makeAutoObservable } from 'mobx';

class UiStore {
  tableScrollLeft = 0;
  tableScrollAtEnd = false;

  constructor() {
    makeAutoObservable(this);
  }

  setScroll(left: number, maxScroll: number, clientWidth: number) {
    this.tableScrollLeft = left;
    this.tableScrollAtEnd = left + clientWidth >= maxScroll - 1;
  }
}

export const uiStore = new UiStore();
