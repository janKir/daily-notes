import { css } from "@linaria/core";
import { addDays, subDays } from "date-fns";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "../../contexts/AppContext";
import { Flex } from "../common/Flex";
import { InputContainer } from "./InputContainer";

export const ContentContainer: React.FC = () => {
  const { notes, date } = useAppContext();
  const yesterdayKey = subDays(date, 1).toDateString();
  const todayKey = date.toDateString();
  const tomorrowKey = addDays(date, 1).toDateString();

  return (
    <Flex row align="stretch" justify="stretch" grow>
      <Flex basis={0} grow>
        <ReactMarkdown>{notes[yesterdayKey] ?? "Keine Notiz"}</ReactMarkdown>
      </Flex>
      <Flex
        basis={0}
        grow={2}
        justify="stretch"
        align="stretch"
        className={todayContainerStyle}
      >
        <InputContainer dateKey={todayKey} />
      </Flex>
      <Flex basis={0} grow>
        <ReactMarkdown>{notes[tomorrowKey] ?? "Keine Notiz"}</ReactMarkdown>
      </Flex>
    </Flex>
  );
};

const todayContainerStyle = css`
  margin: 0 16px;
`;
