import { Item } from "../types/item/item";

export const fixDecimals = (n: number) =>
  Math.round((n + Number.EPSILON) * 100) / 100;

export const calculateItemPrice = (item: Pick<Item, "price" | "quantity">) =>
  fixDecimals(item.price * item.quantity);
