import CartItemPricing from "./CartItemPricing";
import { Item } from "../../../types/item/Item";

import CartItemCTA from "./CartItemCTA";

import { CartItemContainer, CartItemImage } from "./styles";
import Image from "next/image";

interface CartItemProps {
  item: Item;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({ item }) => {
  return (
    <CartItemContainer>
      <CartItemImage>
        <Image src={item.image} alt="cartItem Pic" layout="fill" />
      </CartItemImage>
      <CartItemCTA item={item} />
      <CartItemPricing item={item} />
    </CartItemContainer>
  );
};

export default CartItem;
