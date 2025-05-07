import { makeAutoObservable } from 'mobx';

class UiStore {
  tableScrollLeft = 0;
  tableScrollAtEnd = false;
  tableScrollRightEdge = false;

  constructor() {
    makeAutoObservable(this);
  }

  setScroll(left: number, maxScroll: number, clientWidth: number) {
    this.tableScrollLeft = left;
    this.tableScrollRightEdge = left + clientWidth >= maxScroll - 1;
    this.tableScrollAtEnd = left + clientWidth >= maxScroll - 1;
  }
}

export const uiStore = new UiStore();
