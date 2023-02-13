import { useAppContext } from "../contexts/AppContext";
import { getDateKey } from "../utils/getDateKey";

export function useDateHasTrackedHours(): (date: Date) => boolean {
  const { trackings } = useAppContext();

  return (date: Date): boolean => {
    const trackingEntry = trackings[getDateKey(date)];

    return !!trackingEntry?.planned || !!trackingEntry?.actual;
  };
}
