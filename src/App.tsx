import React from "react";
import "./App.css";
import { AppLayout } from "./AppLayout";
import { AppContextProvider } from "./contexts/AppContext";
import { SettingsContextProvider } from "./contexts/SettingsContext";

export const App: React.FC = () => {
  return (
    <AppContextProvider>
      <SettingsContextProvider>
        <AppLayout />
      </SettingsContextProvider>
    </AppContextProvider>
  );
};
