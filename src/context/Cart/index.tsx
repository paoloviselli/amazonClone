import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { Item } from "../../types/item/Item";
import { db } from "../../../firebase/clientApp";

import { calculateItemPrice } from "../../utils/priceCalculations";
import { doc } from "firebase/firestore";

export type Pricing = {
  total: number;
};

// type AddItem = Omit<Item, "orderId">;
interface CartContext {
  cart?: Cart;
  addItemToCart: (item: Item) => void;
  deleteItemFromCart: (item: Item) => void;
  clearCart: () => void;
  updateItemQuantity: (item: Item, amount: number) => void;
  pricing: Pricing;
}

type Cart = { cartItems: Item[] };

export const CartContext = React.createContext<CartContext>({
  cart: { cartItems: [] },
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  clearCart: () => {},
  updateItemQuantity: () => {},
  pricing: {
    total: 0,
  },
});

interface CartProviderProps {}

const CartProvider: React.FunctionComponent<CartProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart>({ cartItems: [] });
  const [pricing, setPricing] = useState<Pricing>({ total: 0 });

  const addItemToCart = async (item: Item) => {
    const oldCart = (await (
      await db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").get()
    ).data()) as Cart;

    const newCart = { cartItems: [...oldCart.cartItems, item] };

    setCart(newCart);

    db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").set(newCart);
  };

  const deleteItemFromCart = async (item: Item) => {
    const oldCart = (await (
      await db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").get()
    ).data()) as Cart;

    const newCart = {
      cartItems: oldCart.cartItems.filter((el) => el.id !== item.id),
    };

    setCart(newCart);

    db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").set(newCart);
  };

  const clearCart = () => {
    setCart({ cartItems: [] });

    db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").set(cart);
  };

  const updateItemQuantity = async (item: Item, amount: number) => {
    const oldCart = (await (
      await db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").get()
    ).data()) as Cart;

    const cartToUpdate = oldCart.cartItems.filter((el) => el.id === item.id);

    cartToUpdate[0].quantity = amount;

    //no you need to check that the item is not already existent in the cart, and if it is then increase the quantity by 1
    //also if on the cart the person edits the amount number you should replace the curernt ammount with that new ammount the user inserted
    // fianlly you have to create the functionality for which if the user clicks on the arrows up or down on the cart then the amount increase or decreases by a value of 1 for each click
  };

  for (let i = 0; i < cart.cartItems.length; i++) {
    cart.cartItems[i].quantity * cart.cartItems[i].price;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
        clearCart,
        updateItemQuantity,
        pricing,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
