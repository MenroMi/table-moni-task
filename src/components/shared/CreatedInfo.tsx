import { TokenType } from '@/types/token';
import { formatTime } from '@/utils/formatTime';
import { FC } from 'react';
import { Clock } from '../icons/Clock';

type Props = {
  inputData: TokenType;
};

export const CreatedInfo: FC<Props> = ({ inputData }) => {
  const time = formatTime(inputData.createdAt);

  return (
    <div className="flex items-center justify-center gap-1">
      <Clock />
      <span>{time}</span>
    </div>
  );
};
