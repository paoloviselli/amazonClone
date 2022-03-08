import Header from "../../components/header";
import CartList from "../../components/Cart/CartList";
import CartSummary from "../../components/Cart/CartSummary";
import Text from "../../components/shared/Text";
import Link from "next/link";
import useCart from "../../hooks/useCart";
import { Cart } from "../../context/Cart";
import { FiLoader } from "react-icons/fi";

import {
  CartListContainer,
  CartScreenContainer,
  LoaderWraper,
  ScreenContainer,
  SpacingDiv,
} from "./styles";

interface CartProps {}

const Cart: React.FunctionComponent<CartProps> = () => {
  const { cart, isLoading } = useCart();

  const cartItem = cart?.cartItems[0];

  // if (!cartItem) {
  //   return <>cart is empty</>;
  // }

  //refetch cart and then setCart(newFetchCart)

  return (
    <ScreenContainer>
      <Header />
      {isLoading ? (
        <LoaderWraper>
          <Text fontSize={32} color="primary">
            Loading
          </Text>
          <SpacingDiv />
          <FiLoader size={40} />
        </LoaderWraper>
      ) : (
        <CartScreenContainer>
          {!cartItem ? (
            <CartListContainer isEmpty={!cartItem}>
              <Text fontSize={30} color="primary">
                Cart is empty
              </Text>
              <Link href="/screens/home">Add something to it</Link>
            </CartListContainer>
          ) : (
            <CartListContainer>
              <CartList item={cartItem} />
            </CartListContainer>
          )}
          <CartSummary />
        </CartScreenContainer>
      )}
    </ScreenContainer>
  );
};

export default Cart;
