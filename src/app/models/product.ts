export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  numberOfReviews: number;
  rating: number;
  image: string;
  inMyFavorites: boolean;
};
