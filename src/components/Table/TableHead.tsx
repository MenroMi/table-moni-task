import { FC, PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

export const TableHead: FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => <thead className={className}>{children}</thead>;
