import Header from "../../components/header";
import CartList from "../../components/Cart/CartList";
import CartSummary from "../../components/Cart/CartSummary";
import Text from "../../components/shared/Text";
import Link from "next/link";
import useCart from "../../hooks/useCart";
import { Cart } from "../../context/Cart";

import {
  CartListContainer,
  CartScreenContainer,
  ScreenContainer,
} from "./styles";

interface CartProps {}

const Cart: React.FunctionComponent<CartProps> = () => {
  const { cart } = useCart();

  const cartItem = cart?.cartItems[0];

  // if (!cartItem) {
  //   return <>cart is empty</>;
  // }

  //refetch cart and then setCart(newFetchCart)

  return (
    <ScreenContainer>
      <Header />
      <CartScreenContainer>
        {!cartItem ? (
          <CartListContainer>
            <Text fontSize={30} color="primary">
              Cart is empty
            </Text>
            <Link href="/displays">Add something to it</Link>
          </CartListContainer>
        ) : (
          <CartList item={cartItem} />
        )}
        <CartSummary />
      </CartScreenContainer>
    </ScreenContainer>
  );
};

export default Cart;
