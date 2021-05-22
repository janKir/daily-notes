import React from "react";

export interface Notes {
  [date: string]: string;
}

export interface AppContextI {
  notes: Notes;
  setNotes: React.Dispatch<React.SetStateAction<Notes>>;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const AppContext =
  React.createContext<AppContextI | undefined>(undefined);

export const AppContextProvider: React.FC = ({ children }) => {
  const [notes, setNotes] = React.useState<Notes>({});
  const [date, setDate] = React.useState(new Date());

  return (
    <AppContext.Provider value={{ notes, setNotes, date, setDate }}>
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
