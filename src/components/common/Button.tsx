import { css, cx } from "@linaria/core";
import React from "react";
import { colors } from "../../styles/colors";

export interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(({ onClick, disabled, children }, ref) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(buttonStyle, disabled && buttonDisabledStyle)}
      disabled={disabled}
      ref={ref}
    >
      {children}
    </button>
  );
});

const buttonStyle = css`
  color: ${colors.black};
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
`;

const buttonDisabledStyle = css`
  cursor: initial;
`;
