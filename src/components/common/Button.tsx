import React from "react";
import { colors } from "../../styles/colors";

export interface ButtonProps {
  onClick: () => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, children }, ref) => {
    return (
      <button
        type="button"
        onClick={onClick}
        style={{
          fontSize: 16,
          color: colors.black,
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
