import CartList from "../../components/Cart/CartList";
import CartSummary from "../../components/Cart/CartSummary";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import { Item } from "../../types/item/item";
import { CartScreenContainer, ScreenContainer } from "./styles";
import useCart from "../../hooks/useCart";
import { useEffect } from "react";

interface CartProps {
  item: Item;
}

const Cart: React.FunctionComponent<CartProps> = ({ item }) => {
  const ctx = useCart();

  const cart = ctx.cart?.cartItems[0] as Item;

  return (
    <ScreenContainer>
      <Header />
      <CartScreenContainer>
        <CartList item={cart} />
        <CartSummary />
      </CartScreenContainer>
    </ScreenContainer>
  );
};

export default Cart;
