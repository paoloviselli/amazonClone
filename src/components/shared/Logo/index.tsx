import { LogoContainer } from "./styles";
import AmazonLogo from "../../../../public/amazon-logo.png";
import Image from "next/image";

interface ButtonProps {}

const Logo: React.FunctionComponent<ButtonProps> = () => {
  return (
    <LogoContainer>
      <Image src={AmazonLogo} alt="Amazon Logo" layout="fill"></Image>
    </LogoContainer>
  );
};

export default Logo;
