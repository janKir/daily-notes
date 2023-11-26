import React from "react";
import { addMonths, subMonths } from "date-fns";
import { SlideBar } from "../../common/SlideBar";
import { CurrentMonth } from "./CurrentMonth";
import { PrevMonth } from "./PrevMonth";
import { NextMonth } from "./NextMonth";

export interface MonthBarProps {
  month: Date;
  setMonth: (date: Date) => void;
}

export const MonthBar: React.FC<MonthBarProps> = ({ month, setMonth }) => {
  const monthBefore = subMonths(month, 1);
  const monthAfter = addMonths(month, 1);

  return (
    <SlideBar
      prevValue={monthBefore.getTime()}
      value={month.getTime()}
      nextValue={monthAfter.getTime()}
      onChange={(value) => setMonth(new Date(value))}
      current={CurrentMonth}
      prev={PrevMonth}
      next={NextMonth}
      sub={() => null}
    />
  );
};
