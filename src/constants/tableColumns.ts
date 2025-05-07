import { TableColumnType } from '@/types/table';

export const TABLE_COLUMNS: TableColumnType[] = [
  { id: 'token', label: 'Token', className: 'w-[158px] text-left pl-4 pr-2' },
  { id: 'created', label: 'Created', className: 'w-[82px] pr-2' },
  { id: 'smarts', label: 'Smarts', className: 'after-divider' },

  { id: 'cng_sm', label: 'Cng', className: 'w-[72px] text-left px-2' },
  { id: 'sm', label: 'S.M.', className: 'after-divider' },

  { id: 'cng_txs', label: 'Cng', className: 'w-[72px] text-left px-2' },
  { id: 'txs', label: 'TXs', className: 'after-divider' },

  { id: 'cng_volume', label: 'Cng', className: 'w-[72px] text-left px-2' },
  { id: 'volume', label: 'Volume', className: 'after-divider' },

  { id: 'cng_liquidity', label: 'Cng', className: 'w-[72px] text-left px-2' },
  { id: 'liquidity', label: 'Liquadity', className: 'w-[72px]' },
  { id: 'mkt_cap', label: 'MKT Cap', className: 'after-divider' },

  { id: 'cng_holders', label: 'Cng', className: 'w-[72px] text-left px-2' },
  { id: 'holders', label: 'Holders', className: 'after-divider' },

  { id: 'cng_misc', label: 'Cng', className: 'w-[72px] text-left px-2' },
  { id: 'misc', label: 'CV/CR/HNP/LB', className: 'w-[120px]' },

  { id: 'empty', label: '', className: 'w-[106px]' },
];
