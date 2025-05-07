import { Zap } from '../icons/Zap';

export const BuyButton = () => (
  <button
    type="button"
    className="bg-shark rounded-md flex items-center justify-center gap-2 w-[82px] h-11 cursor-pointer"
  >
    <Zap />
    <span className="text-sm font-medium">Buy</span>
  </button>
);
