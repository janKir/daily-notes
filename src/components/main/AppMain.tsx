import React from "react";

import { DateBar } from "./DateBar";
import { InputContainer } from "./InputContainer";

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
      <InputContainer />
    </main>
  );
};
