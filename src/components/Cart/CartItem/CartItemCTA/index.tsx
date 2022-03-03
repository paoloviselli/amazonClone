import useCart from "../../../../hooks/useCart";
import { Item } from "../../../../types/item/Item";
import { ItemCardContainer } from "../../../itemCard/styles";
import Text from "../../../shared/Text";
import { CartItemCTAContainer } from "./styles";

interface CartItemCTAProps {
  item: Item;
}

const CartItemCTA: React.FunctionComponent<CartItemCTAProps> = ({ item }) => {
  const { updateItemQuantity, deleteItemFromCart, pricing } = useCart();

  const increaseQuantityHandler = (item: Item) => {
    const newQuantity = item.quantity + 1;
    console.log(newQuantity);

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
    <CartItemCTAContainer>
      <Text fontSize={16} color="primary">
        {item.name}
      </Text>
      <Text fontSize={16} color="primary">
        {item.quantity}
      </Text>
      <button onClick={() => increaseQuantityHandler(item)}>+</button>
      <button onClick={() => decreaseQuantityHandler(item)}>-</button>
      <button onClick={() => deleteItemFromCart(item)}>Delete form Cart</button>
      <p>Total is: {pricing.total}</p>
    </CartItemCTAContainer>
  );
};

export default CartItemCTA;
