import { differenceInCalendarDays, differenceInCalendarMonths } from "date-fns";

const locale = navigator.language;

const rtf = new Intl.RelativeTimeFormat(locale, {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "auto", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

export function formatDiffDaysToday(date: Date): string {
  const now = new Date();
  const diffDays = differenceInCalendarDays(date, now);
  return rtf.format(diffDays, "day");
}

export function formatDiffMonthsToday(date: Date): string {
  const now = new Date();
  const diffMonths = differenceInCalendarMonths(date, now);
  return rtf.format(diffMonths, "month");
}
