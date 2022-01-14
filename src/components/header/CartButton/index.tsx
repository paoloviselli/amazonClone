import { CartIconContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CartButtonProps {
  onClick: () => void;
}

const CartButton: React.FunctionComponent<CartButtonProps> = ({ onClick }) => {
  return (
    <CartIconContainer onClick={onClick}>
      <FontAwesomeIcon icon="shopping-cart" />
    </CartIconContainer>
  );
};

export default CartButton;
