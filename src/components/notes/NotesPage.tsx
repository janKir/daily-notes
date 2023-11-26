import React from "react";
import { ContentContainer } from "./ContentContainer";
import { useAppContext } from "../../contexts/AppContext";
import { useGetNextActiveDateOrWithNote } from "../../hooks/useGetNextActiveDateOrWithNote";
import { DateBar } from "./datebar/DateBar";

export const NotesPage: React.FC = () => {
  const { date } = useAppContext();
  const getNextActiveDateOrWithNote = useGetNextActiveDateOrWithNote();

  const dateAfter = getNextActiveDateOrWithNote(date, false);
  const dateBefore = getNextActiveDateOrWithNote(date, true);

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
