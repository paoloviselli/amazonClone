import Text from "../../shared/Text";
import { ButtonContainer } from "./styles";
import useCart from "../../../hooks/useCart";
import { useState } from "react";
import { Item } from "../../../types/item/item";
import {
  calculateItemPrice,
  fixDecimals,
} from "../../../utils/priceCalculations";

interface AddToCartButtonProps {
  item: Item;
}

const AddToCartButton: React.FunctionComponent<AddToCartButtonProps> = ({
  item,
}) => {
  //set default amount to 1
  const [amount, setAmount] = useState(1);
  const { addItemToCart, cart, pricing } = useCart();

  const price = fixDecimals(
    calculateItemPrice({
      price: item.price,
      quantity: amount,
    })
  ).toFixed(2);

  const onClick = () => {
    setAmount((prev) => prev + 1);
    addItemToCart({ ...item, quantity: amount });
    console.log(cart.length);
    console.log(price);
    console.log(pricing.subtotal);
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
