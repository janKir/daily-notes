import { differenceInCalendarDays } from "date-fns";

const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "auto", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

const dtf = new Intl.DateTimeFormat("en");

export function formatDate(date: Date): string {
  const now = new Date();
  const diffDays = differenceInCalendarDays(date, now);
  if (Math.abs(diffDays) <= 1) {
    return rtf.format(diffDays, "day");
  }

  return dtf.format(date);
}
