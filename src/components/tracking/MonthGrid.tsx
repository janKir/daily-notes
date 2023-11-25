import React from "react";
import {
  eachDayOfInterval,
  eachWeekOfInterval,
  getISOWeek,
  isThisMonth,
  lastDayOfMonth,
  lastDayOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { css } from "@linaria/core";
import classNames from "classnames";
import { Flex } from "../common/Flex";
import { useSettingsContext } from "../../contexts/SettingsContext";
import { listDaysOfWeek } from "../../utils/listDaysOfWeek";
import { daysOfWeekLabels } from "../../models/day-of-week/constants";
import { colors } from "../../styles/colors";

export interface MonthGridProps {
  date: Date;
}

export const MonthGrid: React.FC<MonthGridProps> = ({ date }) => {
  const { firstDayOfWeek } = useSettingsContext();

  const firstDay = startOfMonth(date);
  const lastDay = lastDayOfMonth(date);

  const daysByWeek = eachWeekOfInterval(
    { start: firstDay, end: lastDay },
    { weekStartsOn: firstDayOfWeek }
  ).map((week) => ({
    days: eachDayOfInterval({
      start: startOfWeek(week, { weekStartsOn: firstDayOfWeek }),
      end: lastDayOfWeek(week, { weekStartsOn: firstDayOfWeek }),
    }).map((day) => (isThisMonth(day) ? day : null)),
    weekNumber: getISOWeek(week),
  }));

  const allDaysOfWeek = listDaysOfWeek(firstDayOfWeek);

  return (
    <Flex grow justify="stretch" align="stretch" role="grid">
      <Flex row role="row">
        <Flex grow basis={0} role="gridcell" className={cellStyle}>
          KW:
        </Flex>
        {allDaysOfWeek.map((day) => (
          <Flex grow basis={0} role="gridcell" className={cellStyle} key={day}>
            {daysOfWeekLabels[day]}
          </Flex>
        ))}
      </Flex>
      {daysByWeek.map((week) => (
        <Flex
          row
          grow
          role="row"
          align="stretch"
          key={week.weekNumber}
          className={rowGridStyle}
        >
          <Flex grow basis={0} role="gridcell" className={cellStyle}>
            KW{week.weekNumber}:
          </Flex>
          {week.days.map((day) => (
            <Flex
              grow
              basis={0}
              role="gridcell"
              className={classNames(
                cellStyle,
                cellGridStyle,
                day ? activeCellStyle : inactiveCellStyle
              )}
              key={day?.toISOString()}
            >
              {day ? day.getDate() : null}
            </Flex>
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

const rowGridStyle = css`
  border-top: 1px solid ${colors.grayX11Gray};
  &:last-child {
    border-bottom: 1px solid ${colors.grayX11Gray};
  }
`;

const cellStyle = css`
  padding: 0.5rem;
`;

const cellGridStyle = css`
  border-left: 1px solid ${colors.grayX11Gray};
  &:last-child {
    border-right: 1px solid ${colors.grayX11Gray};
  }
`;

const activeCellStyle = css`
  &:hover {
    background-color: ${colors.teaGreen1};
  }
`;

const inactiveCellStyle = css`
  background-color: ${colors.grayLight};
`;
