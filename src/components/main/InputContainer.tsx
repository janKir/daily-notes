import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { formatDate } from "../../utils/formatDate";
import { NoteInput } from "../NoteInput";

export const InputContainer: React.FC = () => {
  const { notes, setNotes, date } = useAppContext();
  const dateKey = date.toDateString();

  return (
    <NoteInput
      value={notes[dateKey] ?? ""}
      onChangeText={(value) =>
        setNotes((prevNotes) => ({ ...prevNotes, [dateKey]: value }))
      }
      placeholder={`Deine Notizen für ${formatDate(date)}...`}
    />
  );
};
