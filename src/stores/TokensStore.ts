import { TOKENS_API_URL } from '@/constants/api';
import { TokensType, TokenType } from '@/types/token';
import { makeAutoObservable, runInAction } from 'mobx';

export class TokensStore {
  loading: boolean = false;
  error: string | null = null;

  tokens: TokenType[] = [];

  constructor() {
    makeAutoObservable(this);
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
    } catch (e: unknown) {
      runInAction(() => {
        this.error = (e as Error).message;
        this.loading = false;
      });
    }
  }
}

export const tokensStore = new TokensStore();
