import { isNumber } from '@/utils/validation';
import clsx from 'clsx';
import { FC } from 'react';

type Props = {
  value?: string | number;
};

const validateZero = (val: number) => {
  if (val > 0) return ['+', 'text-positive-green'] as const;

  if (val === 0) return ['', ''] as const;

  return ['-', 'text-destructive-red'] as const;
};

export const CngInfo: FC<Props> = ({ value }) => {
  if (!isNumber(value) || isNaN(value)) {
    return value ? <span>{value}</span> : null;
  }

  const [operator, className] = validateZero(value);
  return <span className={clsx(className)}>{`${operator}${value}`}</span>;
};
