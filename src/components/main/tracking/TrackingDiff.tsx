import { css, cx } from "@linaria/core";
import React from "react";
import { formatHours } from "../../../utils/formatHours";

export interface TrackingDiffProps {
  planned?: number;
  actual?: number;
}

export const TrackingDiff: React.FC<TrackingDiffProps> = ({
  planned,
  actual,
}) => {
  if (planned === undefined || actual === undefined) {
    return <span title="Difference">-</span>;
  }

  const diff = actual - planned;

  return (
    <span
      title="Difference"
      className={cx(
        diff < 0 && diffNegativeStyles,
        diff > 0 && diffPositiveStyles,
        diff === 0 && diffNeutralStyles
      )}
    >
      {formatHours(diff, { alwaysSign: true })}
    </span>
  );
};

const diffNegativeStyles = css`
  color: red;
`;

const diffPositiveStyles = css`
  color: green;
`;

const diffNeutralStyles = css`
  color: blue;
`;
