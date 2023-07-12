export interface IAddProduct {
  data: string;
  products: {
    productId: number;
    quantity: number;
  };
  userId: number;
}

export interface IGetProduct extends IAddProduct {
  id: number;
}
