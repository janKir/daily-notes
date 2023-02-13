import { css } from "@linaria/core";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "../../contexts/AppContext";
import { useSettingsContext } from "../../contexts/SettingsContext";
import { getDateKey } from "../../utils/getDateKey";
import { Flex } from "../common/Flex";
import { InputContainer } from "./InputContainer";
import { Tracking } from "./tracking/Tracking";

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
  const { trackingActivated } = useSettingsContext();
  const { notes } = useAppContext();
  const dateBeforeKey = getDateKey(dateBefore);
  const dateKey = getDateKey(date);
  const dateAfterKey = getDateKey(dateAfter);

  return (
    <Flex row align="stretch" justify="stretch" grow>
      <Flex basis="25%" grow>
        <ReactMarkdown>{notes[dateBeforeKey] ?? "Keine Notiz"}</ReactMarkdown>
      </Flex>
      <Flex
        basis="50%"
        grow={2}
        justify="stretch"
        align="stretch"
        className={todayContainerStyle}
      >
        <InputContainer dateKey={dateKey} />
        {trackingActivated && <Tracking date={date} />}
      </Flex>
      <Flex basis="25%" grow>
        <ReactMarkdown>{notes[dateAfterKey] ?? "Keine Notiz"}</ReactMarkdown>
      </Flex>
    </Flex>
  );
};

const todayContainerStyle = css`
  margin: 0 16px;
`;
