import { addDays, subDays } from "date-fns";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "../../contexts/AppContext";
import { MdInput } from "../common/MdInput";

export const InputContainer: React.FC = () => {
  const { notes, setNotes, date } = useAppContext();
  const yesterdayKey = subDays(date, 1).toDateString();
  const todayKey = date.toDateString();
  const tomorrowKey = addDays(date, 1).toDateString();

  const [mode, setMode] = React.useState<"write" | "preview">("write");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "stretch",
      }}
    >
      <div style={{ flexBasis: 0, flexGrow: 1 }}>
        <ReactMarkdown>{notes[yesterdayKey] ?? "Keine Notiz"}</ReactMarkdown>
      </div>
      <div
        style={{ flexBasis: 0, flexGrow: 2, marginLeft: 16, marginRight: 16 }}
      >
        <MdInput
          value={notes[todayKey] ?? ""}
          onChangeText={(value) =>
            setNotes((prevNotes) => ({ ...prevNotes, [todayKey]: value }))
          }
          mode={mode}
          onSetMode={setMode}
        />
      </div>
      <div style={{ flexBasis: 0, flexGrow: 1 }}>
        <ReactMarkdown>{notes[tomorrowKey] ?? "Keine Notiz"}</ReactMarkdown>
      </div>
    </div>
  );
};
