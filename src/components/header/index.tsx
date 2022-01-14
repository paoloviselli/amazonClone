import { useRouter } from "next/router";
import Logo from "../shared/Logo";
import CartButton from "./CartButton";

import { HeaderContainer } from "./styles";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const router = useRouter();
  return (
    <HeaderContainer>
      <Logo onClick={() => router.push("/displays")} />
      <CartButton onClick={() => router.push("/displays/cart")} />
    </HeaderContainer>
  );
};

export default Header;
