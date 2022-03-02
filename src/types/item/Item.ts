export type Item = {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  stockAmount: number;
  //stockAmount is the number of items available in storage, quantity is used to indicate the number of items in a users order
};
