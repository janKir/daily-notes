import React from "react";
import { addDays, subDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { css } from "@linaria/core";
import { useAppContext } from "../../contexts/AppContext";
import { colors } from "../../styles/colors";
import { Button } from "../common/Button";
import { formatDate } from "../../utils/formatDate";
import { Flex } from "../common/Flex";

export const DateBar: React.FC = () => {
  const { date, setDate } = useAppContext();

  return (
    <Flex
      row
      justify="space-evenly"
      align="center"
      tag="nav"
      className={barStyle}
    >
      <Flex row basis={0} grow justify="flex-start">
        <Button onClick={() => setDate(subDays(date, 1))}>
          &lsaquo; {formatDate(subDays(date, 1))}
        </Button>
      </Flex>

      <Flex row basis={0} grow justify="center">
        <DatePicker
          selected={date}
          onChange={(nextDate: Date) => setDate(nextDate)}
          customInput={
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore -> props are inserted via ref
            <Button>{formatDate(date)}</Button>
          }
        />
      </Flex>
      <Flex row basis={0} grow justify="flex-end">
        <Button onClick={() => setDate(addDays(date, 1))}>
          {formatDate(addDays(date, 1))} &rsaquo;
        </Button>
      </Flex>
    </Flex>
  );
};

const barStyle = css`
  height: 50px;
  background-color: ${colors.teaGreen2};
`;
