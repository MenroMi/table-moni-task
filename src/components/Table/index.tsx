'use client';

import { TABLE_COLUMNS } from '@/constants/tableColumns';
import { TokenType } from '@/types/token';
import { FC } from 'react';
import { TableBody } from './TableBody';
import TableBodyRow from './TableBodyRow';
import { TableHead } from './TableHead';
import { TableHeadRow } from './TableHeadRow';

type Props = {
  tokens: TokenType[];
};

const Table: FC<Props> = ({ tokens }) => (
  <table className="table-fixed bg-woodsmoke mx-auto w-full max-w-[1920px] min-w-7xl border-separate border-spacing-0">
    <TableHead className="h-12">
      <TableHeadRow columns={TABLE_COLUMNS} />
    </TableHead>
    <TableBody>
      {tokens.map((token) => (
        <TableBodyRow key={token.id} cell={token} />
      ))}
    </TableBody>
  </table>
);

export default Table;
