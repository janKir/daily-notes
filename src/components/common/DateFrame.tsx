import { css } from "@linaria/core";
import React from "react";
import { colors } from "../../styles/colors";
import { Flex } from "./Flex";

export interface DateFrameProps {
  date: Date;
}

const weekdayF = new Intl.DateTimeFormat([], { weekday: "short" });
const calendardayF = Intl.DateTimeFormat([], { day: "2-digit" });
const monthF = Intl.DateTimeFormat([], { month: "short" });
const yearF = Intl.DateTimeFormat([], { year: "2-digit" });

export const DateFrame: React.FC<DateFrameProps> = ({ date }) => {
  return (
    <Flex className={containerStyle} align="center">
      <div className={smallFont}>{weekdayF.format(date)}</div>
      <div className={largeFont}>{calendardayF.format(date)}</div>
      <Flex row justify="space-between" className={smallFont}>
        {monthF.format(date)} {yearF.format(date)}
      </Flex>
    </Flex>
  );
};

const containerStyle = css`
  border-radius: 5px;
  background-color: ${colors.teaGreen1};
  margin: 5px;
  padding: 5px 10px;

  &:hover {
    background-color: ${colors.teaGreen2};
  }
`;

const largeFont = css`
  font-size: 20px;
  line-height: 21px;
  font-weight: bold;
`;

const smallFont = css`
  font-size: 11px;
  line-height: 12px;
`;
