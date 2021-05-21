import React from "react";
import { AppFooter } from "./components/footer/AppFooter";
import { AppHeader } from "./components/header/AppHeader";
import { AppMain } from "./components/main/AppMain";

export const AppLayout: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  );
};
