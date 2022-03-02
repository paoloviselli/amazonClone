import CartItemPricing from "./CartItemPricing";
import { CartItemContainer, CartItemImage, CartItemInfo } from "./styles";
import { Item } from "../../../types/item/item";
import { calculateItemPrice } from "../../../utils/priceCalculations";

interface CartItemProps {
  item: Item;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({ item }) => {
  return (
    <CartItemContainer>
      <CartItemImage />
      <CartItemInfo />
      <CartItemPricing />
    </CartItemContainer>
  );
};

export default CartItem;
