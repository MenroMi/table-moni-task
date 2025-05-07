type VolumeType = {
  USD: number;
};

type SecureType = {
  shortName: string;
  name: string;
  status: boolean;
};

type LinkType = {
  name: string;
  linkUrl: string;
  logoUrl: string;
};

type ChainType = {
  id: number;
  name: string;
  slug: string;
  logoUrl: string;
};

type PlatformType = {
  id: number;
  name: string;
  slug: string;
  logoUrl: string;
};

export type TokenType = {
  id: number;
  address: string;
  logoUrl: string;
  name: string;
  symbol: string;
  chain: ChainType;
  platform: PlatformType;
  createdAt: number;
  smartFollowersCount: number;
  smartFollowersCountChange: number;
  smartMentionsCount: number;
  smartMentionsCountChange: number;
  txsBuyCount: number;
  txsSellCount: number;
  txsCountChange: number;
  volumeBuy: VolumeType;
  volumeSell: VolumeType;
  volumeChange: VolumeType;
  marketCap: VolumeType;
  marketCapChange: VolumeType;
  marketCapChangePercents: VolumeType;
  liquidity: VolumeType;
  holdersCount: number;
  holdersCountChange: number;
  security: SecureType[];
  links: LinkType[];
};

export type TokensType = {
  items: TokenType[];
};
