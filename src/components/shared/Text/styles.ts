import styled from "styled-components";

interface TitleProps {
  fontSize: number;
  color: "primary" | "secondary" | "active";
  bold?: boolean;
  light?: boolean;
  align: string;
}

export const TitleContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const TitleText = styled.p<TitleProps>`
  font-family: "Roboto";
  margin: ${({ theme }) => theme.spacing.single} 0;
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme, color }) => {
    switch (color) {
      case "primary": {
        return theme.colors.dark;
      }

      case "secondary": {
        return theme.colors.white;
      }

      case "active": {
        return theme.colors.active;
      }

      default:
        return theme.colors.dark;
    }
  }};

  ${({ bold, light }) =>
    bold
      ? "font-weight: bold"
      : light
      ? "font-weight: 300"
      : "font-weight: 400"};
`;
