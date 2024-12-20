export type Hotel = {
  id: number;
  name: string;
  address: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  theme: string;
  facilities: string;
  price: number;
};

export type ListingsMeta = {
  currentPage: number;
  from: number;
  lastPage: number;
  links: [{ url: string; label: string; active: boolean }];
  path: string;
  perPage: number;
  to: number;
  total: number;
} | null;

export type ListingsLinks = { first: string; last: string; prev?: string; next?: string } | null;
