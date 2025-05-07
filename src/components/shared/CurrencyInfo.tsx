import { formatCurrency } from '@/utils/formatCurrency';
import { isNumber } from '@/utils/validation';
import { FC } from 'react';
import { TransactionRationBar } from './TransactionRationBar';

type CorrelationType = {
  buy: number;
  sell: number;
};

type Props = {
  value?: string | number;
  correlation?: CorrelationType;
  withBar?: boolean;
};

export const CurrencyInfo: FC<Props> = ({ value, correlation, withBar }) => {
  return isNumber(value) ? (
    <>
      <span>{formatCurrency(value)}</span>
      {withBar ? (
        <TransactionRationBar
          className="absolute bottom-3 right-2"
          positiveValue={correlation?.buy}
          destructiveValue={correlation?.sell}
        />
      ) : null}
    </>
  ) : null;
};
