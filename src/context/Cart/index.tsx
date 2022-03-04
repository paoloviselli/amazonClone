import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { Item } from "../../types/item/Item";
import { db } from "../../../firebase/clientApp";

import { calculateItemPrice, fixDecimals } from "../../utils/priceCalculations";
import { doc } from "firebase/firestore";

export type Pricing = {
  total: number;
  totalQuantity: number;
};

// type AddItem = Omit<Item, "orderId">;
interface CartContext {
  cart?: Cart;
  addItemToCart: (item: Item) => void;
  deleteItemFromCart: (item: Item) => void;
  clearCart: () => void;
  updateItemQuantity: (item: Item, amount: number) => void;
  pricing: Pricing;
  cartSet: (newCart: Cart) => void;
  isLoading: boolean;
}

export type Cart = { cartItems: Item[] };

export const CartContext = React.createContext<CartContext>({
  cart: { cartItems: [] },
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  clearCart: () => {},
  updateItemQuantity: () => {},
  pricing: {
    total: 0,
    totalQuantity: 0,
  },
  cartSet: () => {},
  isLoading: true,
});

interface CartProviderProps {}

const CartProvider: React.FunctionComponent<CartProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart>({ cartItems: [] });
  const [pricing, setPricing] = useState<Pricing>({
    total: 0,
    totalQuantity: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const cartSet = (newCart: Cart) => {
    setCart(newCart);
  };

  //adds Items to cart and checks if they are already in the cart, then it adds +1 to the quantity of that item
  const addItemToCart = async (item: Item) => {
    const oldCart = (await (
      await db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").get()
    ).data()) as Cart;

    // const index = oldCart.cartItems.findIndex((el) => el.id === item.id);

    // const cartCheck = { ...oldCart };

    // if (!cartCheck.cartItems[index]) {
    //   const newCart = { cartItems: [...oldCart.cartItems, item] };

    //   setCart(newCart);
    //   db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").set(newCart);
    // } else {
    //   cartCheck.cartItems[index].quantity += 1;
    //   db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").set(cartCheck);
    // }

    const cartItem = oldCart.cartItems.find(
      (oldItems) => oldItems.id === item.id
    );
    const cartToChange = { ...oldCart };

    console.log({ cartItem, item });

    if (cartItem) {
      cartToChange.cartItems = oldCart.cartItems.map((item) =>
        item.id === cartItem.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : item
      );
    } else {
      cartToChange.cartItems.push({ ...item, quantity: 1 });
    }

    db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").set(cartToChange);
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

    // setCart((oldCart)=> oldCart.cartItems.map((item) => newItem.id === item.id ? {...item, quantity: newAmount} : item))

    const index = oldCart.cartItems.findIndex((el) => el.id === item.id);

    oldCart.cartItems[index].quantity = newAmount;

    setCart(oldCart);

    db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").set(oldCart);
  };

  //calculates the total cart value everytime the application is run or everytime there is a change in the array [cart]
  useEffect(() => {
    const total = cart.cartItems.reduce(
      (acc, item) => acc + calculateItemPrice(item),
      0
    );

    const totalQuantity = cart.cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    setPricing({ total: fixDecimals(total), totalQuantity });
  }, [cart]);

  //fetches data from Firebase everytime the app is ran
  useEffect(() => {
    setIsLoading(true);
    const fetchHandeler = async () => {
      const cartData = (await (
        await db.collection("cart").doc("0w4VWR5NV2kTPjWMHdnq").get()
      ).data()) as Cart;
      setCart(cartData);
    };

    fetchHandeler();
    setIsLoading(false);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
        clearCart,
        updateItemQuantity,
        pricing,
        cartSet,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
