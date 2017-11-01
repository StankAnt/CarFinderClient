export interface FilterResults {
  filterResults: CarModel[];
  allAdsLoaded?: boolean;
}

export interface CarModel {
  _id: string;
  bodyType: string;
  description: string;
  images: string[];
  mark: string;
  kms: number;
  model: string;
  price: number;
  sourceName: string;
  sourceUrl: string;
  year: number;
}

export type InitialState = FilterResults;