import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { AppLayout } from "./components/layout/AppLayout";
import { AppContextProvider } from "./contexts/AppContext";
import { SettingsContextProvider } from "./contexts/SettingsContext";
import { AppRoutes } from "./AppRoutes";

export const App: React.FC = () => {
  return (
    <AppContextProvider>
      <SettingsContextProvider>
        <Router>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </Router>
      </SettingsContextProvider>
    </AppContextProvider>
  );
};
