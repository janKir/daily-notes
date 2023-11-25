import { eachDayOfInterval } from "date-fns";
import { TrackingEntry, useAppContext } from "../contexts/AppContext";
import { getDateKey } from "../utils/getDateKey";

export interface UseTrackingTotalsOptions {
  startDate: Date;
  endDate: Date;
}

export interface TrackingTotals {
  planned: number;
  actual: number;
  diff: number;
  remaining?: {
    planned: number;
    days: number;
  };
}

export function useTrackingTotals({
  startDate,
  endDate,
}: UseTrackingTotalsOptions): TrackingTotals {
  const { trackings } = useAppContext();

  const days = eachDayOfInterval({ start: startDate, end: endDate })
    .map((date): [Date, TrackingEntry | undefined] => [
      date,
      trackings[getDateKey(date)],
    ])
    .filter(
      (trackingEntry): trackingEntry is [Date, TrackingEntry] =>
        trackingEntry[1] !== undefined &&
        (trackingEntry[1].planned !== undefined ||
          trackingEntry[1].actual !== undefined),
    );

  const completedDays = days.filter(
    ([, tracking]) => tracking.actual !== undefined,
  );

  const completedSum = completedDays.reduce(
    (total, [, tracking]) => ({
      planned: total.planned + (tracking.planned ?? 0),
      actual: total.actual + (tracking.actual ?? 0),
    }),
    { planned: 0, actual: 0 },
  );

  const uncompletedDays = days.filter(
    ([, tracking]) => tracking.planned && tracking.actual === undefined,
  );

  const remainingPlannedHours = uncompletedDays.reduce(
    (total, [, tracking]) => total + (tracking.planned ?? 0),
    0,
  );

  return {
    planned: completedSum.planned,
    actual: completedSum.actual,
    diff: completedSum.actual - completedSum.planned,
    remaining: remainingPlannedHours
      ? { planned: remainingPlannedHours, days: uncompletedDays.length }
      : undefined,
  };
}
