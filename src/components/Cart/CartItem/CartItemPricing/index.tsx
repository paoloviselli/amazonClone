import { CartItemPricingContainer } from "./styles";

interface CartItemPricingProps {}

const CartItemPricing: React.FunctionComponent<CartItemPricingProps> = ({}) => {
  return (
    <CartItemPricingContainer>
      <p>£33</p>
      <p>3</p>
    </CartItemPricingContainer>
  );
};

export default CartItemPricing;
