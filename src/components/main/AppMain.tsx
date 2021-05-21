import React from "react";
import { NoteInput } from "../NoteInput";

export const AppMain: React.FC = () => {
  const [value, setValue] = React.useState("");

  return (
    <main
      style={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "stretch",
        padding: 16,
      }}
    >
      <NoteInput
        value={value}
        onChangeText={setValue}
        placeholder="Deine Notizen für heute..."
      />
    </main>
  );
};
