import Text from "../../shared/Text";
import { ButtonContainer } from "./styles";

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FunctionComponent<AddToCartButtonProps> = ({
  onClick,
}) => {
  return (
    <ButtonContainer onClick={onClick}>
      <Text fontSize={16} color="primary" bold>
        Add to Cart
      </Text>
    </ButtonContainer>
  );
};

export default AddToCartButton;
