import React from "react";
import { css, cx } from "@linaria/core";
import { fixCssCustomProperty } from "../../utils/fixCssCustomPropertyType";
import { colors } from "../../styles/colors";

export interface ProgressProps {
  max: number;
  value: number;
  color: string;
  backgroundColor?: string;
  height?: string;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  max,
  value,
  color,
  backgroundColor = colors.white,
  height = "0.5rem",
  className,
}) => {
  return (
    <div
      className={cx(containerStyle, className)}
      style={fixCssCustomProperty({
        "--progress-value": `${(value / max) * 100}%`,
        "--background-color": backgroundColor,
        "--color": color,
        "--progress-height": height,
      })}
    >
      <div className={progressStyle} />
    </div>
  );
};

const containerStyle = css`
  width: 100%;
  height: var(--progress-height);
  background-color: var(--background-color);
  border-radius: 0.25rem;
  overflow: hidden;
  transition: height 100ms ease-in-out;
`;

const progressStyle = css`
  width: var(--progress-value);
  height: 100%;
  background-color: var(--color);
  border-radius: 0.25rem;
  min-width: 0.25rem;
  transition: width 100ms ease-in-out;
`;
