import { addDays, subDays } from "date-fns";
import { useDateHasNote } from "./useDateHasNote";
import { useDateIsActiveDayOfWeek } from "./useDateIsActiveDayOfWeek";
import { useDateIsSkipped } from "./useDateIsSkipped";

export function useGetNextActiveDateOrWithNote(): (
  date: Date,
  past?: boolean
) => Date {
  const dateHasNote = useDateHasNote();
  const dateIsActiveDayOfWeek = useDateIsActiveDayOfWeek();
  const dateIsSkipped = useDateIsSkipped();

  function getNextActiveDateOrWithNote(date: Date, past?: boolean): Date {
    const nextDate = past ? subDays(date, 1) : addDays(date, 1);

    if (
      !dateIsSkipped(nextDate) &&
      (dateIsActiveDayOfWeek(nextDate) || dateHasNote(nextDate))
    ) {
      return nextDate;
    }
    return getNextActiveDateOrWithNote(nextDate, past);
  }

  return getNextActiveDateOrWithNote;
}
