import { TableColumnType } from '@/types/table';

export const TABLE_COLUMNS: TableColumnType[] = [
  {
    id: 'token',
    label: 'Token',
    sort: true,
    className: 'w-[158px] text-left pl-4 pr-2',
  },
  {
    id: 'created',
    label: 'Created',
    sort: true,
    classNameContent: 'justify-center',
    className: 'w-[82px] pr-2',
  },
  {
    id: 'smarts',
    label: 'Smarts',
    sort: true,
    classNameContent: 'justify-end',
    className: 'after-divider',
  },

  {
    id: 'cng_sm',
    label: 'Cng',
    sort: true,
    classNameContent: '',
    className: 'w-[72px] text-left px-2',
  },
  {
    id: 'sm',
    label: 'S.M.',
    sort: true,
    classNameContent: 'justify-end',
    className: 'after-divider',
  },

  {
    id: 'cng_txs',
    label: 'Cng',
    sort: true,
    classNameContent: '',
    className: 'w-[72px] text-left px-2',
  },
  {
    id: 'txs',
    label: 'TXs',
    sort: true,
    classNameContent: 'justify-end',
    className: 'after-divider',
  },

  {
    id: 'cng_volume',
    label: 'Cng',
    sort: true,
    classNameContent: '',
    className: 'w-[72px] text-left px-2',
  },
  {
    id: 'volume',
    label: 'Volume',
    sort: true,
    classNameContent: 'justify-end',
    className: 'after-divider',
  },

  {
    id: 'cng_liquidity',
    label: 'Cng',
    sort: true,
    className: 'w-[72px] text-left px-2',
  },
  {
    id: 'liquidity',
    label: 'Liquadity',
    sort: true,
    classNameContent: 'justify-center',
    className: 'w-[72px]',
  },
  {
    id: 'mkt_cap',
    label: 'MKT Cap',
    sort: true,
    classNameContent: 'justify-end',
    className: 'after-divider',
  },

  {
    id: 'cng_holders',
    label: 'Cng',
    sort: true,
    classNameContent: '',
    className: 'w-[72px] text-left px-2',
  },
  {
    id: 'holders',
    label: 'Holders',
    sort: true,
    classNameContent: 'justify-end',
    className: 'after-divider',
  },

  {
    id: 'cng_misc',
    label: 'Cng',
    sort: true,
    classNameContent: '',
    className: 'w-[72px] text-left px-2',
  },
  {
    id: 'misc',
    label: 'CV/CR/HNP/LB',
    sort: true,
    classNameContent: 'justify-center',
    className: 'w-[120px]',
  },

  {
    id: 'buy-btn',
    label: '',
    sort: false,
    classNameContent: '',
    className: 'w-[106px]',
  },
];
