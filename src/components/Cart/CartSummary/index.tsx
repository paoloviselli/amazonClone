import { CartSummaryContainer, SubtotalWrapper } from "./styles";
import useCart from "../../../hooks/useCart";
import Text from "../../shared/Text";
import CartButton from "../CartButton";
import CheckoutModal from "./CheckoutModal";
import { useState } from "react";

interface CartSummaryProps {}

const CartSummary: React.FunctionComponent<CartSummaryProps> = ({}) => {
  const { pricing, cart } = useCart();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isEmpty = cart?.cartItems.length === 0;

  const modalToggleHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <CartSummaryContainer>
      <CheckoutModal
        modalIsOpen={modalIsOpen}
        closeModalHandler={modalToggleHandler}
      />
      <SubtotalWrapper>
        <Text fontSize={18} color="primary">
          Subtotal ({pricing.totalQuantity} items):
        </Text>
        <Text fontSize={18} color="primary" bold>
          £ {pricing.total}
        </Text>
      </SubtotalWrapper>
      {!isEmpty && (
        <CartButton
          onClick={modalToggleHandler}
          label="Proceed to Checkout"
        ></CartButton>
      )}
    </CartSummaryContainer>
  );
};

export default CartSummary;
