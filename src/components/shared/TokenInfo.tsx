import { TokenType } from '@/types/token';
import { FC } from 'react';
import { Socials } from '../Socials';
import { Avatar } from './Avatar';

type Props = {
  inputData: TokenType;
};

export const TokenInfo: FC<Props> = ({ inputData }) => {
  const address = inputData.address;

  const slicedAddress = address
    ? `${address.slice(0, 3)}...${address.slice(-3)}`
    : '';

  return (
    <div className="flex items-end gap-2.5">
      <Avatar
        logoUrl={inputData.logoUrl}
        name={inputData.name}
        className="self-center"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold" title={inputData.name}>
          {inputData.name}
        </h3>
        <div className="flex items-end gap-1.5">
          <span className="inline-block leading-3 text-xs text-santas-gray">
            {slicedAddress}
          </span>
          <Socials />
        </div>
      </div>
    </div>
  );
};
