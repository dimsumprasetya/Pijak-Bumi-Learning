import data from './lynkid-data.json';

export type LynkidProduk = {
  id: string;
  title: string;
  price: string;
  originalPrice: string | null;
  image: string;
  url: string;
};

export type LynkidProgram = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  url: string;
  cta: string;
};

export type LynkidProfile = {
  username: string;
  description: string;
  avatar: string;
};

export type LynkidData = {
  source: string;
  fetchedAt: string;
  profile: LynkidProfile;
  products: LynkidProduk[];
  programs: LynkidProgram[];
};

const d = data as LynkidData;

export const lynkidProducts: LynkidProduk[] = d.products;
export const lynkidPrograms: LynkidProgram[] = d.programs;
export const lynkidProfile: LynkidProfile = d.profile;
export const lynkidFetchedAt: string = d.fetchedAt;
export const lynkidSource: string = d.source;
