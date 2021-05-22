import React from "react";
import { colors } from "../../styles/colors";
import { NoteInput } from "../NoteInput";
import { DateBar } from "./DateBar";

export const AppMain: React.FC = () => {
  const [value, setValue] = React.useState("");

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
      <NoteInput
        value={value}
        onChangeText={setValue}
        placeholder="Deine Notizen für heute..."
      />
    </main>
  );
};
