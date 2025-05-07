'use client';

import Table from '@/components/Table';
import { useTokensStore } from '@/context/TokensContext';
import { observer } from 'mobx-react-lite';
import { UIEvent, useEffect } from 'react';
import { uiStore } from '../stores/UiStore';

const Home = observer(() => {
  const tokensStore = useTokensStore();

  useEffect(() => {
    tokensStore.fetchTokens();
  }, [tokensStore]);

  const handleScroll = (e: UIEvent) => {
    const target = e.currentTarget as HTMLDivElement;

    uiStore.setScroll(
      target.scrollLeft,
      target.scrollWidth,
      target.clientWidth
    );
  };

  return (
    <div
      onScroll={handleScroll}
      className="overflow-x-auto max-h-[calc(100vh-50px)] h-screen border border-shark rounded-sm max-w-[1920px] mx-auto"
    >
      {!tokensStore.tokens.length || tokensStore.loading ? (
        <div className="flex justify-center items-center h-[inherit]">
          Loading...
        </div>
      ) : (
        <Table tokens={tokensStore.tokens} />
      )}
    </div>
  );
});

export default Home;
