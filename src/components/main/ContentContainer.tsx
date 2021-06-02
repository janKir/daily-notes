import { css } from "@linaria/core";
import { addDays, subDays } from "date-fns";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "../../contexts/AppContext";
import { getDateKey } from "../../utils/getDateKey";
import { Flex } from "../common/Flex";
import { InputContainer } from "./InputContainer";

export interface ContentContainerProps {
  dateBefore: Date;
  date: Date;
  dateAfter: Date;
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  dateBefore,
  date,
  dateAfter,
}) => {
  const { notes } = useAppContext();
  const dateBeforeKey = getDateKey(dateBefore);
  const dateKey = getDateKey(date);
  const dateAfterKey = getDateKey(dateAfter);

  return (
    <Flex row align="stretch" justify="stretch" grow>
      <Flex basis={0} grow>
        <ReactMarkdown>{notes[dateBeforeKey] ?? "Keine Notiz"}</ReactMarkdown>
      </Flex>
      <Flex
        basis={0}
        grow={2}
        justify="stretch"
        align="stretch"
        className={todayContainerStyle}
      >
        <InputContainer dateKey={dateKey} />
      </Flex>
      <Flex basis={0} grow>
        <ReactMarkdown>{notes[dateAfterKey] ?? "Keine Notiz"}</ReactMarkdown>
      </Flex>
    </Flex>
  );
};

const todayContainerStyle = css`
  margin: 0 16px;
`;
