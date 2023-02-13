import React from "react";
import { eachDayOfInterval } from "date-fns";
import { TrackingEntry, useAppContext } from "../../contexts/AppContext";
import { formatHours } from "../../utils/formatHours";
import { getDateKey } from "../../utils/getDateKey";

export interface TrackingStatsPeriodProps {
  startDate: Date;
  endDate: Date;
  title: string;
}

export const TrackingStatsPeriod: React.FC<TrackingStatsPeriodProps> = ({
  startDate,
  endDate,
  title,
}) => {
  const { trackings } = useAppContext();

  if (startDate > endDate) {
    // eslint-disable-next-line no-console
    console.error("startDate > endDate");
    // eslint-disable-next-line unicorn/no-null
    return null;
  }

  const days = eachDayOfInterval({ start: startDate, end: endDate })
    .map((date): [Date, TrackingEntry | undefined] => [
      date,
      trackings[getDateKey(date)],
    ])
    .filter(
      (trackingEntry): trackingEntry is [Date, TrackingEntry] =>
        trackingEntry[1] !== undefined &&
        (trackingEntry[1].planned !== undefined ||
          trackingEntry[1].actual !== undefined)
    );

  const completedDays = days.filter(
    ([, tracking]) => tracking.actual !== undefined
  );

  const completedSum = completedDays.reduce(
    (total, [, tracking]) => ({
      planned: total.planned + (tracking.planned ?? 0),
      actual: total.actual + (tracking.actual ?? 0),
    }),
    { planned: 0, actual: 0 }
  );

  const uncompletedDays = days.filter(
    ([, tracking]) => tracking.planned && tracking.actual === undefined
  );

  const uncompletedSum = uncompletedDays.reduce(
    (total, [, tracking]) => total + (tracking.planned ?? 0),
    0
  );

  return (
    <div>
      <h4>{title}</h4>
      <span>Planned: </span>
      <span>{formatHours(completedSum.planned)}</span> - <span>Actual: </span>
      <span>{formatHours(completedSum.actual)}</span> - <span>Diff: </span>
      <span>{formatHours(completedSum.actual - completedSum.planned)}</span>
      {uncompletedDays.length > 0 && (
        <div>
          {uncompletedDays.length} remaining days with{" "}
          {formatHours(uncompletedSum)}h
        </div>
      )}
    </div>
  );
};
