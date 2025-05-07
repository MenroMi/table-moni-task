import { Check } from '../icons/Check';
import { Cross } from '../icons/Cross';

const flags = [true, false, true, false];

export const TradeEntryExit = () => (
  <div className="flex gap-2.5 justify-center">
    {flags.map((flag, idx) =>
      flag ? <Check key={idx} /> : <Cross key={idx} />
    )}
  </div>
);
