import useCart from "../../../hooks/useCart";
import { CartIconContainer, CartIconCounter } from "./styles";
import { BsCart2 } from "react-icons/bs";
import Text from "../../shared/Text";

interface CartButtonProps {
  onClick: () => void;
}

const CartButton: React.FunctionComponent<CartButtonProps> = ({ onClick }) => {
  const { pricing } = useCart();

  return (
    <CartIconContainer onClick={onClick}>
      <CartIconCounter>
        <Text fontSize={12} color="secondary" bold>
          {pricing.totalQuantity}
        </Text>
      </CartIconCounter>
      <BsCart2 color="white" size="36px" />
    </CartIconContainer>
  );
};

export default CartButton;
