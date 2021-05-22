import { css } from "@linaria/core";
import React from "react";
import { colors } from "../../styles/colors";

export interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ onClick, children }, ref) => {
  return (
    <button type="button" onClick={onClick} className={buttonStyle} ref={ref}>
      {children}
    </button>
  );
});

const buttonStyle = css`
  font-size: 16px;
  color: ${colors.black};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;
