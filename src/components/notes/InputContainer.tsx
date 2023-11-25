import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { MdInput } from "../common/MdInput";

export interface InputContainerProps {
  dateKey: string;
}

export const InputContainer: React.FC<InputContainerProps> = ({ dateKey }) => {
  const { notes, setNotes } = useAppContext();

  const [mode, setMode] = React.useState<"write" | "preview">("write");

  return (
    <MdInput
      value={notes[dateKey] ?? ""}
      onChangeText={(value) =>
        setNotes((prevNotes) => ({ ...prevNotes, [dateKey]: value }))
      }
      mode={mode}
      onSetMode={setMode}
    />
  );
};
