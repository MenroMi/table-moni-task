import { ComponentType, ValueType } from '@/types/table';
import { TokenType } from '@/types/token';
import { FC, JSX } from 'react';
import { BuyButton } from '../shared/BuyButton';
import { CngInfo } from '../shared/CngInfo';
import { CommonInfo } from '../shared/CommonInfo';
import { CreatedInfo } from '../shared/CreatedInfo';
import { CurrencyInfo } from '../shared/CurrencyInfo';
import { TokenInfo } from '../shared/TokenInfo';
import { TradeEntryExit } from '../shared/TradeEntryExit';

type Props = {
  cell: TokenType;
  value?: ValueType;
  type: ComponentType;
  className?: string;
  ref?: any;
};

const getInfoComponent = (
  type: ComponentType,
  cell: TokenType,
  value?: ValueType
) => {
  switch (type) {
    case 'token-info':
      return <TokenInfo inputData={cell} />;
    case 'created-at':
      return <CreatedInfo inputData={cell} />;
    case 'ratio-bar-txs':
      return (
        <CurrencyInfo
          withBar
          value={value}
          correlation={{
            buy: cell.txsBuyCount,
            sell: cell.txsSellCount,
          }}
        />
      );
    case 'ratio-bar-volume':
      return (
        <CurrencyInfo
          withBar
          value={value}
          correlation={{
            buy: Number(cell.volumeBuy['USD']),
            sell: Number(cell.volumeSell['USD']),
          }}
        />
      );
    case 'cng':
      return <CngInfo value={value} />;
    case 'currency':
      return <CurrencyInfo value={value} />;
    case 'entry-exit':
      return <TradeEntryExit />;
    case 'buy-btn':
      return <BuyButton />;
  }

  return <CommonInfo value={value} />;
};

export const TableBodyCell: FC<Props> = ({
  type,
  cell,
  value,
  className,
  ref,
}) => {
  const component: JSX.Element = getInfoComponent(type, cell, value);

  return (
    <td ref={ref} className={className}>
      {component}
    </td>
  );
};
