import { TokenType } from '@/types/token';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { uiStore } from '../../stores/UiStore';
import { TableBodyCell } from './TableBodyCell';

type Props = {
  cell: TokenType;
  className?: string;
};

const TableBodyRow: FC<Props> = observer(({ cell, className }) => (
  <tr className={clsx('border-b border-shark h-16', className)}>
    {/* TOKEN */}
    <TableBodyCell
      type={'token-info'}
      cell={cell}
      className={clsx(
        'sticky-l bg-cod-gray w-[158px] truncate overflow-hidden text-left pl-4 pr-2 transition-shadow',
        uiStore.tableScrollLeft && 'no-shadow',
        uiStore.tableScrollLeft > 0 && 'shadow-sticky'
      )}
    />
    {/* CREATED */}
    <TableBodyCell type={'created-at'} cell={cell} />
    {/* SMARTS */}
    <TableBodyCell
      type={'common'}
      cell={cell}
      value={cell.smartFollowersCount}
      className="after-divider"
    />
    {/* CNG - S.M. */}
    <TableBodyCell
      type={'cng'}
      cell={cell}
      value={cell.smartFollowersCountChange}
      className="pl-2"
    />
    {/* S.M. */}
    <TableBodyCell
      type={'common'}
      cell={cell}
      value={cell.smartMentionsCount}
      className="after-divider"
    />
    {/* CNG - TXs */}
    <TableBodyCell
      type={'cng'}
      cell={cell}
      value={cell.smartMentionsCountChange}
      className="pl-2"
    />
    {/* TXs */}
    <TableBodyCell
      type={'ratio-bar-txs'}
      cell={cell}
      value={cell.txsBuyCount + cell.txsSellCount}
      className="after-divider"
    />
    {/* CNG - VOLUME */}
    <TableBodyCell
      type={'cng'}
      cell={cell}
      value={cell.txsCountChange}
      className="pl-2"
    />
    {/* VOLUME */}
    <TableBodyCell
      type={'ratio-bar-volume'}
      cell={cell}
      value={Number(cell.volumeBuy.USD ?? 0) + Number(cell.volumeSell.USD ?? 0)}
      className="after-divider relative"
    />
    {/* CNG - LIQUIDITY */}
    <TableBodyCell
      type={'cng'}
      cell={cell}
      value={cell.volumeChange.USD ?? 0}
      className="pl-2"
    />
    {/* LIQUIDITY */}
    <TableBodyCell
      type={'currency'}
      cell={cell}
      value={Number(cell.liquidity.USD ?? 0)}
      className="text-center"
    />
    {/* MKT Cap */}
    <TableBodyCell
      type={'currency'}
      cell={cell}
      value={Number(cell.marketCap.USD ?? 0)}
      className="after-divider"
    />
    {/* CNG - HOLDERS */}
    <TableBodyCell
      type={'cng'}
      cell={cell}
      value={cell.marketCapChange.USD ?? 0}
      className="pl-2"
    />
    {/* HOLDERS */}
    <TableBodyCell
      type={'common'}
      cell={cell}
      value={cell.holdersCount}
      className="after-divider"
    />
    <TableBodyCell
      type={'cng'}
      cell={cell}
      value={cell.holdersCountChange}
      className="pl-2"
    />
    <TableBodyCell type={'entry-exit'} cell={cell} />
    <TableBodyCell
      type={'buy-btn'}
      cell={cell}
      className={clsx(
        'sticky-r bg-cod-gray pr-4 px-2 transition-shadow',
        uiStore.tableScrollAtEnd ? 'no-shadow' : 'shadow-sticky'
      )}
    />
  </tr>
));

export default TableBodyRow;
