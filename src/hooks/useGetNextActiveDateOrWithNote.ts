import { addDays, subDays } from "date-fns";
import { useDateHasNote } from "./useDateHasNote";
import { useDateIsActiveDayOfWeek } from "./useDateIsActiveDayOfWeek";

export function useGetNextActiveDateOrWithNote(): (
  date: Date,
  past?: boolean
) => Date {
  const dateHasNote = useDateHasNote();
  const dateIsActiveDayOfWeek = useDateIsActiveDayOfWeek();

  function getNextActiveDateOrWithNote(date: Date, past?: boolean): Date {
    const nextDate = past ? subDays(date, 1) : addDays(date, 1);

    if (dateIsActiveDayOfWeek(nextDate) || dateHasNote(nextDate)) {
      return nextDate;
    }
    return getNextActiveDateOrWithNote(nextDate, past);
  }

  return getNextActiveDateOrWithNote;
}
