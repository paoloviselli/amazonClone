import React from "react";

import { TitleText, TitleContainer } from "./styles";

export interface TextProps {
  fontSize: number;
  color: "primary" | "secondary" | "active";
  bold?: boolean;
  light?: boolean;
  align?: string;
}

const Text: React.FunctionComponent<TextProps> = ({
  align = "left",
  bold,
  children,
  color,
  fontSize,
  light,
}) => {
  return (
    <TitleContainer>
      <TitleText
        align={align}
        bold={bold}
        color={color}
        fontSize={fontSize}
        light={light}
      >
        {children}
      </TitleText>
    </TitleContainer>
  );
};

export default Text;
