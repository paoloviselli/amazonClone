import { CartSummaryContainer, SubtotalWrapper } from "./styles";
import useCart from "../../../hooks/useCart";
import Text from "../../shared/Text";
import CartButton from "../CartButton";

interface CartSummaryProps {}

const CartSummary: React.FunctionComponent<CartSummaryProps> = ({}) => {
  const { pricing, cart } = useCart();

  const isEmpty = cart?.cartItems.length === 0;

  return (
    <CartSummaryContainer>
      <SubtotalWrapper>
        <Text fontSize={18} color="primary">
          Subtotal ({pricing.totalQuantity} items):
        </Text>
        <Text fontSize={18} color="primary" bold>
          £ {pricing.total}
        </Text>
      </SubtotalWrapper>
      {!isEmpty && <CartButton label="Proceed to Checkout"></CartButton>}
    </CartSummaryContainer>
  );
};

export default CartSummary;
