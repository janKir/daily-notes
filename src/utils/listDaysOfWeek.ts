import { DayOfWeek } from "../models/day-of-week/types";

export function listDaysOfWeek(
  startWith: DayOfWeek = DayOfWeek.Mon
): DayOfWeek[] {
  const days = [
    DayOfWeek.Mon,
    DayOfWeek.Tue,
    DayOfWeek.Wed,
    DayOfWeek.Thu,
    DayOfWeek.Fri,
    DayOfWeek.Sat,
    DayOfWeek.Sun,
  ];

  const startIndex = days.indexOf(startWith);

  return [...days.slice(startIndex, days.length), ...days.slice(0, startIndex)];
}
