import React from "react";
import { colors } from "../../styles/colors";
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
        backgroundColor: colors.teaGreen2,
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
