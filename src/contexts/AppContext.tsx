import React from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export type Notes = {
  [date in string]?: string;
};

export interface TrackingEntry {
  planned?: number;
  actual?: number;
}

export type Tracking = {
  [date in string]?: TrackingEntry;
};

export interface AppContextI {
  notes: Notes;
  setNotes: React.Dispatch<React.SetStateAction<Notes>>;
  trackings: Tracking;
  setTrackings: React.Dispatch<React.SetStateAction<Tracking>>;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const AppContext =
  React.createContext<AppContextI | undefined>(undefined);

export const AppContextProvider: React.FC = ({ children }) => {
  const [notes, setNotes] = useLocalStorageState<Notes>("notes", {});
  const [trackings, setTrackings] = useLocalStorageState<Tracking>(
    "trackings",
    {}
  );
  const [date, setDate] = React.useState(new Date());

  return (
    <AppContext.Provider
      value={{ notes, setNotes, trackings, setTrackings, date, setDate }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext(): AppContextI {
  const appContext = React.useContext(AppContext);
  if (!appContext) {
    throw new Error(
      "tried to access AppContext outside the scope of its provider"
    );
  }
  return appContext;
}
