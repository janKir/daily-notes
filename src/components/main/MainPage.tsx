import React from "react";
import { css } from "@linaria/core";
import { DateBar } from "./DateBar";
import { ContentContainer } from "./ContentContainer";
import { Flex } from "../common/Flex";
import { useAppContext } from "../../contexts/AppContext";
import { useGetNextActiveDateOrWithNote } from "../../hooks/useGetNextActiveDateOrWithNote";

export const MainPage: React.FC = () => {
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
