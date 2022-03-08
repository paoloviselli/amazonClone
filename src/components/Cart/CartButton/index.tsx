import Text from "../../shared/Text";
import { CartButtonContainer } from "./styles";

interface CartButtonProps {
  label: string;
  onClick: () => void;
}

const CartButton: React.FunctionComponent<CartButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <CartButtonContainer onClick={onClick}>
      <Text fontSize={16} color="primary">
        {label}
      </Text>
    </CartButtonContainer>
  );
};

export default CartButton;
