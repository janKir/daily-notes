import React from "react";
import { css, cx } from "@linaria/core";
import { useAppContext } from "../../contexts/AppContext";
import { getDateKey } from "../../utils/getDateKey";
import { stateRecord } from "../../utils/stateRecord";
import { colors } from "../../styles/colors";
import { useTrackingContext } from "../../contexts/TrackingContext";
import { Progress } from "../common/Progress";
import { Flex } from "../common/Flex";
import { FormattedInput } from "../common/FormattedInput";
import { optionalCall } from "../../utils/optionalCall";
import { formatHours } from "../../utils/formatHours";
import { parseHours } from "../../utils/parseHours";

const optionalFormatHours = optionalCall(formatHours, "");

export interface DayCellProps {
  date: Date | null;
}

export const DayCell: React.FC<DayCellProps> = ({ date }) => {
  const { editMode, setEditMode } = useTrackingContext();
  const { trackings, setTrackings } = useAppContext();

  if (!date) {
    return null;
  }

  const [tracking, setTracking] = stateRecord(
    trackings,
    setTrackings,
  )(getDateKey(date));

  return (
    <Flex grow align="stretch">
      <div>
        <label>
          <div className={labelStyle}>Geplant</div>
          <FormattedInput
            value={tracking?.planned}
            format={optionalFormatHours}
            parse={parseHours}
            size={3}
            type="text"
            placeholder="0"
            title="Geplant"
            onChange={(planned) => {
              setTracking((prevTracking) => ({
                ...prevTracking,
                planned,
              }));
            }}
            onFocus={() => setEditMode("planned")}
            onBlur={() => setEditMode(false)}
            tabIndex={editMode === "planned" ? 1 : 0}
            className={cx(
              inputStyle,
              editMode === "planned" && activeInputStyle,
            )}
          />
        </label>
      </div>
      <Flex>
        <Progress
          max={10}
          value={tracking?.planned ?? 0}
          color={colors.teaGreen2}
          className={smallVerticalMarginStyle}
          height={
            editMode === "planned"
              ? "0.75rem"
              : editMode === "actual"
                ? "0.25rem"
                : "0.5rem"
          }
        />
        <Progress
          max={10}
          value={tracking?.actual ?? 0}
          color={colors.teaGreen1}
          className={smallVerticalMarginStyle}
          height={
            editMode === "actual"
              ? "0.75rem"
              : editMode === "planned"
                ? "0.25rem"
                : "0.5rem"
          }
        />
      </Flex>
      <div>
        <label>
          <div className={labelStyle}>Gemacht</div>
          <FormattedInput
            value={tracking?.actual}
            format={optionalFormatHours}
            parse={parseHours}
            size={3}
            type="text"
            placeholder="0"
            title="Gemacht"
            onChange={(actual) => {
              setTracking((prevTracking) => ({
                ...prevTracking,
                actual,
              }));
            }}
            onFocus={() => setEditMode("actual")}
            onBlur={() => setEditMode(false)}
            tabIndex={editMode === "actual" ? 1 : 0}
            className={cx(
              inputStyle,
              editMode === "actual" && activeInputStyle,
            )}
          />
        </label>
      </div>
    </Flex>
  );
};

const labelStyle = css`
  color: ${colors.grayDark};
  font-size: 0.7rem;
`;

const inputStyle = css`
  background-color: ${colors.grayLight};
  color: ${colors.grayDark};
  border: 2px solid transparent;
  border-radius: 0.25rem;

  // Hide number input arrows
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  -moz-appearance: textfield; /* Firefox */

  &:focus {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: initial;
      margin: initial;
    }

    -moz-appearance: initial; /* Firefox */
  }
`;

const activeInputStyle = css`
  border: 2px solid ${colors.teaGreen2};
  color: ${colors.black};
  font-weight: bold;
`;

const smallVerticalMarginStyle = css`
  margin: 0.1rem 0;
`;
