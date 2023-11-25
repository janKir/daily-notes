import React from "react";
import { css } from "@linaria/core";
import { useAppContext } from "../../contexts/AppContext";
import { getDateKey } from "../../utils/getDateKey";
import { stateRecord } from "../../utils/stateRecord";
import { colors } from "../../styles/colors";

export interface DayCellProps {
  date: Date | null;
}

export const DayCell: React.FC<DayCellProps> = ({ date }) => {
  const { trackings, setTrackings } = useAppContext();
  if (!date) {
    return null;
  }

  const [tracking, setTracking] = stateRecord(
    trackings,
    setTrackings
  )(getDateKey(date));

  return (
    <div>
      <div>
        <label>
          <span className={labelStyle}>Geplant</span>
          <input
            type="number"
            value={tracking?.planned}
            onChange={(e) => {
              setTracking((prevTracking) => ({
                ...prevTracking,
                planned: Number(e.target.value),
              }));
            }}
          />
        </label>
      </div>
      <div>
        <label className={labelStyle}>
          Gemacht
          <input
            type="number"
            value={tracking?.actual}
            onChange={(e) => {
              setTracking((prevTracking) => ({
                ...prevTracking,
                planned: Number(e.target.value),
              }));
            }}
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
