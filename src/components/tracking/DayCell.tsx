import React from "react";
import { css } from "@linaria/core";
import { useAppContext } from "../../contexts/AppContext";
import { getDateKey } from "../../utils/getDateKey";
import { stateRecord } from "../../utils/stateRecord";
import { colors } from "../../styles/colors";
import { useTrackingContext } from "../../contexts/TrackingContext";

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
    <div>
      <div>
        <label>
          <div className={labelStyle}>Geplant</div>
          <input
            type="number"
            value={tracking?.planned}
            size={3}
            placeholder="0"
            onChange={(e) => {
              setTracking((prevTracking) => ({
                ...prevTracking,
                planned: Number(e.target.value),
              }));
            }}
            onFocus={() => setEditMode("planned")}
            onBlur={() => setEditMode(false)}
            tabIndex={editMode === "planned" ? 1 : 0}
            className={inputStyle}
          />
        </label>
      </div>
      <div>
        <label>
          <div className={labelStyle}>Gemacht</div>
          <input
            type="number"
            value={tracking?.actual}
            size={3}
            placeholder="0"
            onChange={(e) => {
              setTracking((prevTracking) => ({
                ...prevTracking,
                actual: Number(e.target.value),
              }));
            }}
            onFocus={() => setEditMode("actual")}
            onBlur={() => setEditMode(false)}
            tabIndex={editMode === "actual" ? 1 : 0}
            className={inputStyle}
          />
        </label>
      </div>
    </div>
  );
};

const labelStyle = css`
  color: ${colors.grayDark};
  font-size: 0.8rem;
`;

const inputStyle = css`
  background-color: ${colors.grayLight};
  color: ${colors.grayDark};
  border: none;
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
