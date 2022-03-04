import { Item } from "../types/item/Item";

export const fixDecimals = (n: number) =>
  Math.round((n + Number.EPSILON) * 100) / 100;

export const calculateItemPrice = (item: Item) =>
  fixDecimals(item.price * item.quantity);
