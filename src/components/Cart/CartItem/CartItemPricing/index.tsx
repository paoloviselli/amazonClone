import { CartItemPricingContainer } from "./styles";

interface CartItemPricingProps {
  price: number;
  amount: number;
}

const CartItemPricing: React.FunctionComponent<CartItemPricingProps> = ({
  price,
  amount,
}) => {
  return (
    <CartItemPricingContainer>
      <p>{price}</p>
      <p>{amount}</p>
    </CartItemPricingContainer>
  );
};

export default CartItemPricing;
