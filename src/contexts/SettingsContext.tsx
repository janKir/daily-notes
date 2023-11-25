import React from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { defaultDaysOfWeekSetting } from "../models/day-of-week/constants";
import { DaysOfWeekSetting } from "../models/day-of-week/types";

export interface SettingsContextI {
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
  const [daysOfWeek, setDaysOfWeek] = useLocalStorageState<DaysOfWeekSetting>(
    "daysOfWeek",
    defaultDaysOfWeekSetting,
  );
  const [trackingActivated, setTrackingActivated] =
    useLocalStorageState<boolean>("trackingActivated", false);

  return (
    <SettingsContext.Provider
      value={{
        daysOfWeek,
        setDaysOfWeek,
        trackingActivated,
        setTrackingActivated,
      }}
    >
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
