import { useDateIsActiveDayOfWeek } from "./useDateIsActiveDayOfWeek";
import { useDateIsSkipped } from "./useDateIsSkipped";

export function useDateIsInactiveOrSkipped(): (date: Date) => boolean {
  const dateIsActive = useDateIsActiveDayOfWeek();
  const dateIsSkipped = useDateIsSkipped();

  return (date: Date): boolean => !dateIsActive(date) || dateIsSkipped(date);
}
