import useCart from "../../../hooks/useCart";
import { Item } from "../../../types/item/Item";
import Text from "../../shared/Text";
import CartItem from "../CartItem";
import { CartListContainer, DivLine } from "./styles";

interface CartListProps {
  item: Item;
}

const CartList: React.FunctionComponent<CartListProps> = ({ item }) => {
  const { cart } = useCart();
  return (
    <>
      <Text fontSize={28} color="primary" bold>
        Shopping Cart
      </Text>
      <DivLine />

      {cart?.cartItems.map((el) => (
        <CartItem item={el} key={el.id} />
      ))}
    </>
  );
};

export default CartList;
