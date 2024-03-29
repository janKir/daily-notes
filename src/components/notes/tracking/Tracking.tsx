import { endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";
import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { useTrackingTotals } from "../../../hooks/useTrackingTotals";
import { getDateKey } from "../../../utils/getDateKey";
import { stateRecord } from "../../../utils/stateRecord";
import { TrackingRow } from "./TrackingRow";
import { useSettingsContext } from "../../../contexts/SettingsContext";

export interface TrackingProps {
  date: Date;
  readonly?: boolean;
}

export const Tracking: React.FC<TrackingProps> = ({ date, readonly }) => {
  const { trackings, setTrackings } = useAppContext();
  const [tracking, setTracking] = stateRecord(
    trackings,
    setTrackings,
  )(getDateKey(date));

  const { firstDayOfWeek } = useSettingsContext();

  const weekTotals = useTrackingTotals({
    startDate: startOfWeek(date, { weekStartsOn: firstDayOfWeek }),
    endDate: endOfWeek(date, { weekStartsOn: firstDayOfWeek }),
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
