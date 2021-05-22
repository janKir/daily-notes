import React from "react";
import { DateBar } from "./DateBar";
import { ContentContainer } from "./ContentContainer";

export const AppMain: React.FC = () => {
  return (
    <main
      style={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        padding: 16,
      }}
    >
      <DateBar />
      <ContentContainer />
    </main>
  );
};
