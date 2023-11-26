import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { SlideBar } from "../../common/SlideBar";
import { PrevDay } from "./PrevDay";
import { CurrentDay } from "./CurrentDay";
import { NextDay } from "./NextDay";
import { SubCurrentDay } from "./SubCurrentDay";

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

  const handleChange = React.useCallback(
    (value: number) => setDateInternal(new Date(value)),
    [setDateInternal],
  );

  return (
    <SlideBar
      prevValue={dateBefore.getTime()}
      value={date.getTime()}
      nextValue={dateAfter.getTime()}
      onChange={handleChange}
      prev={PrevDay}
      current={CurrentDay}
      next={NextDay}
      sub={SubCurrentDay}
    />
  );
};
