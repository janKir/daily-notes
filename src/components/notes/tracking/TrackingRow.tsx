import { css } from "@linaria/core";
import React from "react";
import { formatHours } from "../../../utils/formatHours";
import { optionalCall } from "../../../utils/optionalCall";
import { parseHours } from "../../../utils/parseHours";
import { Flex } from "../../common/Flex";
import { FormattedInput } from "../../common/FormattedInput";
import { TrackingDiff } from "./TrackingDiff";

const optionalFormatHours = optionalCall(formatHours, "");

export interface TrackingRowProps {
  title: string;
  planned: number | undefined;
  actual: number | undefined;
  onSetPlanned?: (planned: number | undefined) => void;
  onSetActual?: (actual: number | undefined) => void;
  remaining?: {
    planned: number;
    days: number;
  };
}

export const TrackingRow: React.FC<TrackingRowProps> = ({
  title,
  planned,
  actual,
  onSetPlanned,
  onSetActual,
  remaining,
}) => {
  return (
    <Flex row justify="space-between">
      <Flex basis="20%">{title}:</Flex>
      <Flex basis="20%" grow>
        {onSetPlanned ? (
          <FormattedInput
            value={planned}
            onChange={onSetPlanned}
            format={optionalFormatHours}
            parse={parseHours}
            placeholder="Planned"
            title="Planned"
            type="text"
            className={inputStyles}
          />
        ) : (
          <span title="Planned">{optionalFormatHours(planned)}</span>
        )}
      </Flex>
      <Flex basis="20%" grow className={actualStyles}>
        {onSetActual ? (
          <FormattedInput
            value={actual}
            onChange={onSetActual}
            format={optionalFormatHours}
            parse={parseHours}
            placeholder="Actual"
            title="Actual"
            type="text"
            className={inputStyles}
          />
        ) : (
          <span title="Actual">{optionalFormatHours(actual)}</span>
        )}
      </Flex>
      <Flex basis="20%" grow>
        <TrackingDiff planned={planned} actual={actual} />
      </Flex>
      <Flex basis="20%" grow>
        {remaining && (
          <span title="Remaining" className={remainingStyles}>
            ({optionalFormatHours(remaining.planned)} in {remaining.days} )
          </span>
        )}
      </Flex>
    </Flex>
  );
};

const inputStyles = css`
  all: unset;
  width: 5em;
`;

const actualStyles = css`
  font-weight: bold;
`;

const remainingStyles = css`
  color: gray;
  font-size: 0.9em;
`;
