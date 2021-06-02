import React from "react";
import { isBefore } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { css } from "@linaria/core";
import { useAppContext } from "../../contexts/AppContext";
import { Button } from "../common/Button";
import { Flex } from "../common/Flex";
import { DateFrame } from "../common/DateFrame";
import { DiffDays } from "./DiffDays";
import { AnimatedSlideChange } from "../common/AnimatedSlideChange";
import { useDateIsActiveDayOfWeek } from "../../hooks/useDateIsActiveDayOfWeek";

export interface DateBarProps {
  dateBefore: Date;
  date: Date;
  dateAfter: Date;
}

export const DateBar: React.FC<DateBarProps> = ({
  dateBefore,
  date,
  dateAfter,
}) => {
  const { setDate: setDateInternal } = useAppContext();
  const [transitionCounter, setTransitionCounter] = React.useState({
    ltr: 0,
    rtl: 0,
  });
  const dateIsActive = useDateIsActiveDayOfWeek();

  const prevButtonRef = React.useRef(null);

  const setDate = (nextDate: Date): void => {
    setDateInternal(nextDate);
    setTransitionCounter((prev) =>
      isBefore(nextDate, date)
        ? { ltr: prev.ltr, rtl: prev.rtl + 1 }
        : { ltr: prev.ltr + 1, rtl: prev.rtl }
    );
  };

  return (
    <AnimatedSlideChange
      direction="ltr"
      changeKey={transitionCounter.ltr.toString()}
    >
      <AnimatedSlideChange
        direction="rtl"
        changeKey={transitionCounter.rtl.toString()}
      >
        <Flex align="stretch" tag="nav" className={barStyle}>
          <Flex row justify="space-evenly" align="center">
            <Flex row basis={0} grow justify="center" align="center">
              <Button onClick={() => setDate(dateBefore)} ref={prevButtonRef}>
                <Flex row align="center">
                  &lsaquo;
                  <DateFrame
                    date={dateBefore}
                    inactive={!dateIsActive(dateBefore)}
                  />
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
                    <DateFrame date={date} inactive={!dateIsActive(date)} />
                  </div>
                }
              />
            </Flex>
            <Flex row basis={0} grow justify="center">
              <Button onClick={() => setDate(dateAfter)}>
                <Flex row align="center">
                  <DateFrame
                    date={dateAfter}
                    inactive={!dateIsActive(dateAfter)}
                  />
                  &rsaquo;
                </Flex>
              </Button>
            </Flex>
          </Flex>

          <Flex row justify="center">
            <DiffDays date={date} onClick={() => setDate(new Date())} />
          </Flex>
        </Flex>
      </AnimatedSlideChange>
    </AnimatedSlideChange>
  );
};

const barStyle = css`
  margin-bottom: 16px;
`;
