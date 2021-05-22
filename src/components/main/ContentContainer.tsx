import { addDays, subDays } from "date-fns";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "../../contexts/AppContext";
import { InputContainer } from "./InputContainer";

export const ContentContainer: React.FC = () => {
  const { notes, date } = useAppContext();
  const yesterdayKey = subDays(date, 1).toDateString();
  const todayKey = date.toDateString();
  const tomorrowKey = addDays(date, 1).toDateString();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "stretch",
        flexGrow: 1,
      }}
    >
      <div style={{ flexBasis: 0, flexGrow: 1 }}>
        <ReactMarkdown>{notes[yesterdayKey] ?? "Keine Notiz"}</ReactMarkdown>
      </div>
      <div
        style={{
          flexBasis: 0,
          flexGrow: 2,
          marginLeft: 16,
          marginRight: 16,
          display: "flex",
          justifyContent: "stretch",
          alignItems: "stretch",
        }}
      >
        <InputContainer dateKey={todayKey} />
      </div>
      <div style={{ flexBasis: 0, flexGrow: 1 }}>
        <ReactMarkdown>{notes[tomorrowKey] ?? "Keine Notiz"}</ReactMarkdown>
      </div>
    </div>
  );
};
