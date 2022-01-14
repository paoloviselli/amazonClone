import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { Item } from "../../types/item/item";

import { calculateItemPrice } from "../../utils/priceCalculations";

export type Pricing = {
  subtotal: number;
  deliveryFee: number;
  total: number;
  //   checkoutType: "prime" | "normal";
};

type AddItem = Omit<Item, "orderId">;
interface CartContext {
  cart: Item[];
  addItemToCart: (item: AddItem) => void;
  updateItemQuantity: (item: Item, amount: number) => void;
  deleteItemFromCart: (item: string) => void;
  pricing: Pricing;
  clearCart: () => void;
  //   setPricingType: (p: "prime" | "normal") => void;
}

export const CartContext = React.createContext<CartContext>({
  cart: [],
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  updateItemQuantity: () => {},
  pricing: {
    subtotal: 0,
    total: 0,
    deliveryFee: 0,
    // checkoutType: "normal",
  },
  clearCart: () => {},
  //   setPricingType: () => {},
});

////////////////////

interface CartProviderProps {}

const CartProvider: React.FunctionComponent<CartProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<Item[]>([]);

  const [pricing, setPricing] = useState<Pricing>({
    subtotal: 0,
    deliveryFee: 0,
    total: 0,
  });

  const addItemToCart = (newItem: AddItem) => {
    const { quantity, ...itemKeys } = newItem;
    if (cart.length > 0) {
      let counter = 0;
      cart.forEach((item: Item) => {
        const { orderId, quantity, ...oldItemKeys } = item;
        if (JSON.stringify(oldItemKeys) === JSON.stringify(itemKeys)) {
          updateItemQuantity(item, newItem.quantity + item.quantity);
          counter++;
        }
      });
      if (counter === 0) {
        setCart((oldCart) => [...oldCart, { ...newItem, orderId: v4() }]);
      }
    } else {
      setCart((oldCart) => [...oldCart, { ...newItem, orderId: v4() }]);
    }
  };

  const updateItemQuantity = (newItem: Item, amount: number) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        newItem.orderId === item.orderId ? { ...item, quantity: amount } : item
      )
    );
  };

  const deleteItemFromCart = (itemId: string) => {
    setCart((oldCart) => oldCart.filter((item) => item.orderId !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const subtotal = cart.reduce(
      (acc, item) => acc + calculateItemPrice(item),
      0
    );

    setPricing({
      subtotal: subtotal,
      total: subtotal,
      deliveryFee: 0,
    });
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        updateItemQuantity,
        deleteItemFromCart,
        addItemToCart,
        pricing,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
