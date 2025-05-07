import { FC, PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

export const TableBody: FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => <tbody className={className}>{children}</tbody>;
