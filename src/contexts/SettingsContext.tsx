import React from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import {
  defaultDaysOfWeekSetting,
  defaultFirstDayOfWeekSetting,
} from "../models/day-of-week/constants";
import { DayOfWeek, DaysOfWeekSetting } from "../models/day-of-week/types";

export interface SettingsContextI {
  firstDayOfWeek: DayOfWeek;
  setFirstDayOfWeek: React.Dispatch<React.SetStateAction<DayOfWeek>>;
  daysOfWeek: DaysOfWeekSetting;
  setDaysOfWeek: React.Dispatch<React.SetStateAction<DaysOfWeekSetting>>;
  trackingActivated: boolean;
  setTrackingActivated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SettingsContext = React.createContext<
  SettingsContextI | undefined
>(undefined);

export const SettingsContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [firstDayOfWeek, setFirstDayOfWeek] = useLocalStorageState<DayOfWeek>(
    "firstDayOfWeek",
    defaultFirstDayOfWeekSetting,
  );
  const [daysOfWeek, setDaysOfWeek] = useLocalStorageState<DaysOfWeekSetting>(
    "daysOfWeek",
    defaultDaysOfWeekSetting,
  );
  const [trackingActivated, setTrackingActivated] =
    useLocalStorageState<boolean>("trackingActivated", false);

  const contextValue = React.useMemo(
    () => ({
      firstDayOfWeek,
      setFirstDayOfWeek,
      daysOfWeek,
      setDaysOfWeek,
      trackingActivated,
      setTrackingActivated,
    }),
    [
      firstDayOfWeek,
      setFirstDayOfWeek,
      daysOfWeek,
      setDaysOfWeek,
      trackingActivated,
      setTrackingActivated,
    ],
  );

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

export function useSettingsContext(): SettingsContextI {
  const settingsContext = React.useContext(SettingsContext);
  if (!settingsContext) {
    throw new Error(
      "tried to access SettingsContext outside the scope of its provider",
    );
  }
  return settingsContext;
}
