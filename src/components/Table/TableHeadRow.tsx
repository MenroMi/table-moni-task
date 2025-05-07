import { TableColumnType } from '@/types/table';
import clsx from 'clsx';
import { FC } from 'react';
import { TableHeadCell } from './TableHeadCell';

type Props = {
  columns: TableColumnType[];
  className?: string;
};

export const TableHeadRow: FC<Props> = ({ columns, className }) => (
  <tr
    className={clsx(
      'sticky top-0 z-20 bg-dark-shark border-b-sticky',
      className
    )}
  >
    {columns.map((column, idx) => {
      const pinnedFirstCol =
        idx === 0 ? 'sticky-l bg-dark-shark border-b-sticky' : '';

      const pinnedLastCol =
        idx === columns.length - 1
          ? 'sticky-r bg-dark-shark border-b-sticky'
          : '';

      return (
        <TableHeadCell
          key={column.id}
          className={clsx(column.className, pinnedFirstCol, pinnedLastCol)}
        >
          {column.label}
        </TableHeadCell>
      );
    })}
  </tr>
);
