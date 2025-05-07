export type TableColumnType = {
  id: string;
  label: string;
  className?: string;
};

export type ValueType = string | number;

export type ComponentType =
  | 'token-info'
  | 'created-at'
  | 'ratio-bar-txs'
  | 'ratio-bar-volume'
  | 'checks'
  | 'common'
  | 'cng'
  | 'currency'
  | 'entry-exit'
  | 'buy-btn';
