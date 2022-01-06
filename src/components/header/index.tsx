import { HeaderContainer, LogoContainer } from "./styles";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <LogoContainer></LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
