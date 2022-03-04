import useCart from "../../../../hooks/useCart";
import { Item } from "../../../../types/item/Item";
import { ItemCardContainer } from "../../../itemCard/styles";
import Text from "../../../shared/Text";
import QuantityCounter from "./QuantityCounter";
import { CTAsWrapper, DeleteButton, DivLine } from "./styles";
import { CartItemCTAContainer } from "./styles";

interface CartItemCTAProps {
  item: Item;
}

const CartItemCTA: React.FunctionComponent<CartItemCTAProps> = ({ item }) => {
  const { updateItemQuantity, deleteItemFromCart, pricing } = useCart();

  return (
    <CartItemCTAContainer>
      <Text fontSize={16} color="primary">
        {item.name}
      </Text>
      <CTAsWrapper>
        <QuantityCounter item={item} />
        <DivLine />
        <DeleteButton onClick={() => deleteItemFromCart(item)}>
          <Text fontSize={16} color="clickable">
            Delete
          </Text>
        </DeleteButton>
      </CTAsWrapper>
    </CartItemCTAContainer>
  );
};

export default CartItemCTA;
