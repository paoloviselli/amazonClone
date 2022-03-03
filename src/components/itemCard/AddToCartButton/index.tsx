import Text from "../../shared/Text";
import { ButtonContainer } from "./styles";
import useCart from "../../../hooks/useCart";
import { useState } from "react";
import { Item } from "../../../types/item/item";
import {
  calculateItemPrice,
  fixDecimals,
} from "../../../utils/priceCalculations";

import { db } from "../../../../firebase/clientApp";
import { getFirestore, doc } from "firebase/firestore";

interface AddToCartButtonProps {
  item: Item;
}

type Cart = {
  cartItems: string[];
};

const AddToCartButton: React.FunctionComponent<AddToCartButtonProps> = ({
  item,
}) => {
  // const data = {
  //   name: "Crime and Punishment",
  //   quantity: 30,
  //   price: 12.99,
  //   id: "123",
  //   stockAmount: 300,
  // };

  const ctx = useCart();

  const onClick = () => {
    ctx.addItemToCart(item);
    // ctx.clearCart();
    console.log(ctx.cart?.cartItems.length);
  };

  return (
    <ButtonContainer onClick={onClick}>
      <Text fontSize={16} color="primary" bold>
        Add to Cart +£{item.price}
      </Text>
    </ButtonContainer>
  );
};

export default AddToCartButton;
