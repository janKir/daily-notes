import React from "react";
import { addDays, subDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { css } from "@linaria/core";
import { useAppContext } from "../../contexts/AppContext";
import { Button } from "../common/Button";
import { Flex } from "../common/Flex";
import { DateFrame } from "../common/DateFrame";
import { DiffDays } from "./DiffDays";

export const DateBar: React.FC = () => {
  const { date, setDate } = useAppContext();

  return (
    <Flex align="stretch" tag="nav" className={barStyle}>
      <Flex row justify="space-evenly" align="center">
        <Flex row basis={0} grow justify="center" align="center">
          <Button onClick={() => setDate(subDays(date, 1))}>
            <Flex row align="center">
              &lsaquo;
              <DateFrame date={subDays(date, 1)} />
            </Flex>
          </Button>
        </Flex>

        <Flex row basis={0} grow={2} justify="center">
          <DatePicker
            selected={date}
            onChange={(nextDate: Date) => setDate(nextDate)}
            customInput={
              <div
                className={css`
                  cursor: pointer;
                `}
              >
                <DateFrame date={date} />
              </div>
            }
          />
        </Flex>
        <Flex row basis={0} grow justify="center">
          <Button onClick={() => setDate(addDays(date, 1))}>
            <Flex row align="center">
              <DateFrame date={addDays(date, 1)} />
              &rsaquo;
            </Flex>
          </Button>
        </Flex>
      </Flex>
      <Flex row justify="center">
        <DiffDays date={date} onClick={() => setDate(new Date())} />
      </Flex>
    </Flex>
  );
};

const barStyle = css`
  margin-bottom: 16px;
`;
