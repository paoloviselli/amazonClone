import CartList from "../../components/Cart/CartList";
import CartSummary from "../../components/Cart/CartSummary";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import { Item } from "../../types/item/item";
import { CartScreenContainer, ScreenContainer } from "./styles";

interface CartProps {
  item: Item;
}

const Cart: React.FunctionComponent<CartProps> = ({ item }) => {
  return (
    <ScreenContainer>
      <Header />
      <CartScreenContainer>
        <CartList item={item} />
        <CartSummary />
      </CartScreenContainer>
    </ScreenContainer>
  );
};

export default Cart;
