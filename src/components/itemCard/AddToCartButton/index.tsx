import Text from "../../shared/Text";
import { ButtonContainer } from "./styles";
import useCart from "../../../hooks/useCart";

import { Item } from "../../../types/item/Item";

interface AddToCartButtonProps {
  item: Item;
}

type Cart = {
  cartItems: string[];
};

const AddToCartButton: React.FunctionComponent<AddToCartButtonProps> = ({
  item,
}) => {
  const { addItemToCart } = useCart();

  const onClick = () => {
    addItemToCart(item);
  };

  return (
    <ButtonContainer onClick={onClick}>
      <Text fontSize={16} color="primary" bold>
        Add to Cart
      </Text>
    </ButtonContainer>
  );
};

export default AddToCartButton;
