import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

export const TableHeadCell: FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => (
  <th className={clsx('text-xs text-santas-gray font-semibold', className)}>
    {children}
  </th>
);
