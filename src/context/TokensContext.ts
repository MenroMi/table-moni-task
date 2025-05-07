import { TokensStore } from '@/stores/TokensStore';
import React from 'react';

export const TokensContext = React.createContext<TokensStore | null>(null);

export const useTokensStore = () => {
  const context = React.useContext(TokensContext);
  if (!context)
    throw new Error('useTokensStore must be used within TokensProvider');
  return context;
};
