export type VolumeType = {
  USD: number;
};

export type SecureType = {
  shortName: string;
  name: string;
  status: boolean;
};

export type LinkType = {
  name: string;
  linkUrl: string;
  logoUrl: string;
};

export type ChainType = {
  id: number;
  name: string;
  slug: string;
  logoUrl: string;
};

export type PlatformType = {
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
