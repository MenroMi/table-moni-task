'use client';

import { TokensStore } from '@/stores/TokensStore';
import { useRef } from 'react';
import { TokensContext } from './TokensContext';

export const TokensProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<TokensStore>(null);

  if (!storeRef.current) {
    storeRef.current = new TokensStore();
  }

  return (
    <TokensContext.Provider value={storeRef.current}>
      {children}
    </TokensContext.Provider>
  );
};
