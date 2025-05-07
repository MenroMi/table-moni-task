import { SecureType } from '@/types/token';
import { FC } from 'react';
import { Check } from '../icons/Check';
import { Cross } from '../icons/Cross';

type Props = {
  security: SecureType[];
};

export const TradeEntryExit: FC<Props> = ({ security }) => (
  <div className="flex gap-2.5 justify-center">
    {security.map((flag) =>
      flag.status ? <Check key={flag.name} /> : <Cross key={flag.name} />
    )}
  </div>
);
