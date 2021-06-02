import { DayOfWeek, DaysOfWeekSetting } from "./types";

export const defaultDaysOfWeekSetting: DaysOfWeekSetting = {
  [DayOfWeek.Mon]: true,
  [DayOfWeek.Tue]: true,
  [DayOfWeek.Wed]: true,
  [DayOfWeek.Thu]: true,
  [DayOfWeek.Fri]: true,
  [DayOfWeek.Sat]: false,
  [DayOfWeek.Sun]: false,
};

export const daysOfWeekLabels = {
  [DayOfWeek.Mon]: "Montag",
  [DayOfWeek.Tue]: "Dienstag",
  [DayOfWeek.Wed]: "Mittwoch",
  [DayOfWeek.Thu]: "Donnerstag",
  [DayOfWeek.Fri]: "Freitag",
  [DayOfWeek.Sat]: "Samstag",
  [DayOfWeek.Sun]: "Sonntag",
};
