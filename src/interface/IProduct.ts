export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: string;
  rating: {
    count: number;
    rate: string;
  };
  title: string;
}
