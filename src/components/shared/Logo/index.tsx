import { LogoContainer } from "./styles";
import AmazonLogo from "../../../../public/amazon-logo.png";
import Image from "next/image";

interface ButtonProps {
  onClick: () => void;
}

const Logo: React.FunctionComponent<ButtonProps> = ({ onClick }) => {
  return (
    <LogoContainer onClick={onClick}>
      <Image src={AmazonLogo} alt="Amazon Logo" layout="fill"></Image>
    </LogoContainer>
  );
};

export default Logo;
