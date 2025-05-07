import clsx from 'clsx';
import { FC } from 'react';

type Props = {
  className?: string;
  positiveValue?: number;
  destructiveValue?: number;
};

const normalizeToPercentages = (
  positive: number,
  destructive: number
): [number, number] => {
  const total = positive + destructive;

  if (total === 0) return [50, 50];

  const positivePercent = (positive / total) * 100;
  const destructivePercent = (destructive / total) * 100;

  return [positivePercent, destructivePercent] as const;
};

export const TransactionRationBar: FC<Props> = ({
  className,
  destructiveValue = 0,
  positiveValue = 0,
}) => {
  const [positivePercent, destructivePercent] = normalizeToPercentages(
    positiveValue,
    destructiveValue
  );

  return (
    <div
      className={clsx(
        'flex w-14 h-1 overflow-hidden rounded-full bg-neutral-700',
        className
      )}
    >
      <div
        className={clsx(
          'h-full bg-red-600',
          positivePercent === 1 ? 'rounded-full' : 'rounded-l-full'
        )}
        style={{ width: `${positivePercent * 100}%` }}
      />
      <div
        className={clsx(
          'h-full bg-green-600',
          destructivePercent === 1 ? 'rounded-full' : 'rounded-r-full'
        )}
        style={{ width: `${destructivePercent * 100}%` }}
      />
    </div>
  );
};
