import { TOKENS_API_URL } from '@/constants/api';
import { TokensType, TokenType } from '@/types/token';
import { makeAutoObservable, runInAction } from 'mobx';

export class TokensStore {
  loading: boolean = false;
  error: any = null;

  tokens: TokenType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  insertTokens(tokens: any[]) {
    this.tokens = tokens;
  }

  async fetchTokens() {
    this.loading = true;
    this.error = null;
    try {
      const res = await fetch(TOKENS_API_URL);
      const data: TokensType = await res.json();
      runInAction(() => {
        this.tokens = data.items;
        this.loading = false;
        this.error = null;
      });
    } catch (e: any) {
      runInAction(() => {
        this.error = e.message;
        this.loading = false;
      });
    }
  }
}
