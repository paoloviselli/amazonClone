import useCart from "../../../../../hooks/useCart";
import { Item } from "../../../../../types/item/Item";
import Text from "../../../../shared/Text";

import { Button, NumberWrapper, QauntityCounterContainer } from "./styles";

interface QuantityCounterProps {
  item: Item;
}

const QuantityCounter: React.FunctionComponent<QuantityCounterProps> = ({
  item,
}) => {
  const { updateItemQuantity } = useCart();

  const increaseQuantityHandler = (item: Item) => {
    const newQuantity = item.quantity + 1;

    updateItemQuantity(item, newQuantity);
    console.log(item.name);
  };

  const decreaseQuantityHandler = (item: Item) => {
    if (item.quantity > 0) {
      const newQuantity = item.quantity - 1;
      updateItemQuantity(item, newQuantity);
      console.log(item.name);
    }
  };

  return (
    <QauntityCounterContainer>
      <Button onClick={() => decreaseQuantityHandler(item)}>-</Button>
      <NumberWrapper>
        <Text fontSize={16} color="primary">
          Qty: {item.quantity}
        </Text>
      </NumberWrapper>
      <Button onClick={() => increaseQuantityHandler(item)}>+</Button>
    </QauntityCounterContainer>
  );
};

export default QuantityCounter;
