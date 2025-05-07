import { LinkType } from '@/types/token';
import { FC, JSX } from 'react';
import { Chrome } from '../icons/Chrome';
import { Telegram } from '../icons/Telegram';
import { Twitter } from '../icons/Twitter';

const SOCIALS: Record<string, () => JSX.Element> = {
  web: Chrome,
  telegram: Telegram,
  twitter: Twitter,
};

type Props = {
  links: LinkType[];
};

export const Socials: FC<Props> = ({ links }) => (
  <ul className="flex items-end gap-0.5">
    {links?.map((link) => {
      const Component = SOCIALS[link.name.toLowerCase()];

      return Component ? <Component key={link.name} /> : null;
    })}
  </ul>
);
