import { LogoContainer } from "./styles";
import AmazonLogo from "../../../../public/amazon-logo.png";
import Image from "next/image";

interface ButtonProps {
  onClick: () => void;
}

const Logo: React.FunctionComponent<ButtonProps> = ({ onClick }) => {
  return (
    <LogoContainer onClick={onClick}>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/clone-bbb31.appspot.com/o/amazon-logo.png?alt=media&token=fad15396-6141-4f9e-8859-157175eed2c3"
        alt="Amazon Logo"
        layout="fill"
      ></Image>
    </LogoContainer>
  );
};

export default Logo;
