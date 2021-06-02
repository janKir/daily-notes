import { useSettingsContext } from "../contexts/SettingsContext";
import { DayOfWeek } from "../models/day-of-week/types";

export function useDateIsActiveDayOfWeek(): (date: Date) => boolean {
  const { daysOfWeek } = useSettingsContext();

  return (date: Date): boolean => daysOfWeek[date.getDay() as DayOfWeek];
}
