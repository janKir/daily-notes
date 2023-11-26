import React from "react";
import { css } from "@linaria/core";
import { colors } from "../../styles/colors";
import { Flex } from "./Flex";

export interface MonthFrameProps {
  date: Date;
}

const monthF = Intl.DateTimeFormat([], { month: "short" });
const yearF = Intl.DateTimeFormat([], { year: "numeric" });

export const MonthFrame: React.FC<MonthFrameProps> = ({ date }) => {
  return (
    <Flex className={containerStyle} align="center">
      <div className={largeFont}>{monthF.format(date)}</div>
      <div className={smallFont}>{yearF.format(date)}</div>
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
