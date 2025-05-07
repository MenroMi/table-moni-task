import { Chrome } from './icons/Chrome';
import { Telegram } from './icons/Telegram';
import { Twitter } from './icons/Twitter';

const SOCIALS = [
  { id: 'chrome', Component: Chrome },
  { id: 'telegram', Component: Telegram },
  { id: 'twitter', Component: Twitter },
];

export const Socials = () => {
  return (
    <ul className="flex items-end gap-0.5">
      {SOCIALS.map((social) => (
        <social.Component key={social.id} />
      ))}
    </ul>
  );
};
