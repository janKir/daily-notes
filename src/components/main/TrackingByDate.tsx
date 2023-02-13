import { endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";
import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { useTrackingTotals } from "../../hooks/useTrackingTotals";
import { getDateKey } from "../../utils/getDateKey";
import { stateRecord } from "../../utils/stateRecord";
import { TrackingRow } from "./tracking/TrackingRow";

export interface TrackingByDateProps {
  date: Date;
  readonly?: boolean;
}

export const TrackingByDate: React.FC<TrackingByDateProps> = ({
  date,
  readonly,
}) => {
  const { trackings, setTrackings } = useAppContext();
  const [tracking, setTracking] = stateRecord(
    trackings,
    setTrackings
  )(getDateKey(date));

  const weekTotals = useTrackingTotals({
    startDate: startOfWeek(date, { weekStartsOn: 1 }),
    endDate: endOfWeek(date, { weekStartsOn: 1 }),
  });

  const monthTotals = useTrackingTotals({
    startDate: startOfMonth(date),
    endDate: endOfMonth(date),
  });

  return (
    <div>
      <h3>Tracking</h3>
      <TrackingRow
        title="Day"
        planned={tracking?.planned}
        onSetPlanned={
          readonly
            ? undefined
            : (planned) =>
                setTracking((prevTracking) => ({
                  ...prevTracking,
                  planned,
                }))
        }
        actual={tracking?.actual}
        onSetActual={
          readonly
            ? undefined
            : (actual) =>
                setTracking((prevTracking) => ({
                  ...prevTracking,
                  actual,
                }))
        }
      />
      <hr />
      <TrackingRow
        title="Week"
        planned={weekTotals?.planned}
        actual={weekTotals?.actual}
      />
      <TrackingRow
        title="Month"
        planned={monthTotals?.planned}
        actual={monthTotals?.actual}
        remaining={monthTotals?.remaining}
      />
    </div>
  );
};
