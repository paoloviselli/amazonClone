import { Item } from "../../../../types/item/Item";
import Text from "../../../shared/Text";
import { CartItemPricingContainer } from "./styles";

interface CartItemPricingProps {
  item: Item;
}

const CartItemPricing: React.FunctionComponent<CartItemPricingProps> = ({
  item,
}) => {
  return (
    <CartItemPricingContainer>
      <Text fontSize={18} color="primary" bold>
        £ {item.price}
      </Text>
    </CartItemPricingContainer>
  );
};

export default CartItemPricing;
