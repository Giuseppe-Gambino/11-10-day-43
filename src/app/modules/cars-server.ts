export type Root = CarsServer[];

export interface CarsServer {
  brand: string;
  brandLogo: string;
  model: string;
  modelImage: string;
  year: number;
  price: number;
  available: boolean;
}
