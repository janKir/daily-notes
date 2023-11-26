import React from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { ContentContainer } from "./ContentContainer";
import { useAppContext } from "../../contexts/AppContext";
import { useGetNextActiveDateOrWithNote } from "../../hooks/useGetNextActiveDateOrWithNote";
import { DateBar } from "./datebar/DateBar";

export const NotesPage: React.FC = () => {
  const { date, setDate } = useAppContext();
  const getNextActiveDateOrWithNote = useGetNextActiveDateOrWithNote();

  const dateAfter = getNextActiveDateOrWithNote(date, false);
  const dateBefore = getNextActiveDateOrWithNote(date, true);

  useHotkeys("mod+left", () => {
    setDate(dateBefore);
  });
  useHotkeys("mod+right", () => {
    setDate(dateAfter);
  });
  useHotkeys(["mod+up", "mod+down"], () => {
    setDate(() => new Date());
  });

  return (
    <div>
      <DateBar dateBefore={dateBefore} date={date} dateAfter={dateAfter} />
      <ContentContainer
        dateBefore={dateBefore}
        date={date}
        dateAfter={dateAfter}
      />
    </div>
  );
};
