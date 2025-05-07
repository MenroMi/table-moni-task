import { isNumber } from '@/utils/validation';
import { FC } from 'react';

type Props = {
  value?: string | number;
};

export const CommonInfo: FC<Props> = ({ value }) => {
  if (!isNumber(value) || isNaN(value)) {
    return value ? <span>{value}</span> : null;
  }

  return <span>{value}</span>;
};
