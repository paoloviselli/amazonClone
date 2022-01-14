import { Item } from "../../../types/item/item";
import CartItem from "../CartItem";
import { CartListContainer } from "./styles";

interface CartListProps {
  item: Item;
}

const CartList: React.FunctionComponent<CartListProps> = ({ item }) => {
  return (
    <CartListContainer>
      <CartItem item={item} />
    </CartListContainer>
  );
};

export default CartList;
