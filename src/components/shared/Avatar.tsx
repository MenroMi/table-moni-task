import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

type Props = {
  className?: string;
  logoUrl: string;
  name: string;
};

export const Avatar: FC<Props> = ({ logoUrl, name, className }) => (
  <Image
    src={logoUrl}
    alt={name}
    width={24}
    height={24}
    className={clsx(
      'border border-shark w-6 h-6 shrink-0 rounded-full',
      className
    )}
  />
);
