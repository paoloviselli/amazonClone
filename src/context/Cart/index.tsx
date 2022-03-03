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

  //adds Items to cart and checks if they are already in the cart, then it adds +1 to the quantity of that item
  const addItemToCart = async (item: Item) => {
    const oldCart = (await (
      await db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").get()
    ).data()) as Cart;

    const index = oldCart.cartItems.findIndex((el) => el.id === item.id);

    const cartCheck = { ...oldCart };

    if (!cartCheck.cartItems[index]) {
      const newCart = { cartItems: [...oldCart.cartItems, item] };

      setCart(newCart);
      db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").set(newCart);
    } else {
      cartCheck.cartItems[index].quantity += 1;
      db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").set(cartCheck);
    }
  };

  //filters cart array in Local and overwrites firebase Cart with new cart without the deleted array
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

  //overwrites firebase cart with object containing empty array
  const clearCart = () => {
    setCart({ cartItems: [] });

    db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").set(cart);
  };

  //updates the quantity of items in cart by n amount which is passed as prop
  const updateItemQuantity = async (item: Item, newAmount: number) => {
    const oldCart = (await (
      await db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").get()
    ).data()) as Cart;

    const index = oldCart.cartItems.findIndex((el) => el.id === item.id);

    oldCart.cartItems[index].quantity = newAmount;

    setCart(oldCart);

    db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").set(cart);

    //no you need to check that the item is not already existent in the cart, and if it is then increase the quantity by 1
    //also if on the cart the person edits the amount number you should replace the curernt ammount with that new ammount the user inserted
    // fianlly you have to create the functionality for which if the user clicks on the arrows up or down on the cart then the amount increase or decreases by a value of 1 for each click
  };

  // useEffect(() => {
  //   for (let i = 0; i < cart.cartItems.length; i++) {
  //     const total = cart.cartItems[i].quantity * cart.cartItems[i].price;
  //   }
  // }, []);

  useEffect(() => {
    const fetchHandeler = async () => {
      const cartData = (await (
        await db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").get()
      ).data()) as Cart;
      setCart(cartData);
    };

    fetchHandeler();
  }, []);

  useEffect(() => {
    const total = cart.cartItems.reduce(
      (acc, item) => acc + calculateItemPrice(item),
      0
    );

    setPricing({ total: total });
  }, [cart]);

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
