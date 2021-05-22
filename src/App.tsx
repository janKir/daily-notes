import React from "react";
import "./App.css";
import { AppLayout } from "./AppLayout";
import { AppContextProvider } from "./contexts/AppContext";

export const App: React.FC = () => {
  return (
    <AppContextProvider>
      <AppLayout />
    </AppContextProvider>
  );
};
