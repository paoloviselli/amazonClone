import useCart from "../../../hooks/useCart";
import { Item } from "../../../types/item/item";
import CartItem from "../CartItem";
import { CartListContainer } from "./styles";

interface CartListProps {
  item: Item;
}

const CartList: React.FunctionComponent<CartListProps> = ({ item }) => {
  const { cart } = useCart();
  return (
    <CartListContainer>
      {cart?.cartItems.map((el) => (
        <CartItem item={el} key={el.id} />
      ))}
    </CartListContainer>
  );
};

export default CartList;
