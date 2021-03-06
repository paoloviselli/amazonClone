import { useRouter } from "next/router";
import Logo from "../shared/Logo";
import CartButton from "./CartButton";

import { HeaderContainer } from "./styles";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const router = useRouter();
  return (
    <HeaderContainer>
      <Logo onClick={() => router.push("/screens/home")} />
      <a href="/screens/cart">
        <CartButton onClick={() => {}} />
      </a>
    </HeaderContainer>
  );
};

export default Header;
