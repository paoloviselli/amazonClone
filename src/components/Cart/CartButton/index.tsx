import Text from "../../shared/Text";
import { CartButtonContainer } from "./styles";

interface CartButtonProps {
  label: string;
}

const CartButton: React.FunctionComponent<CartButtonProps> = ({ label }) => {
  return (
    <CartButtonContainer>
      <Text fontSize={16} color="primary">
        {label}
      </Text>
    </CartButtonContainer>
  );
};

export default CartButton;
