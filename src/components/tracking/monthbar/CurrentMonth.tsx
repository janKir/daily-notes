import React from "react";
import de from "date-fns/locale/de";
import { css } from "@linaria/core";
import DatePicker, { registerLocale } from "react-datepicker";

import { SlideBarItemProps } from "../../common/SlideBar";

import "react-datepicker/dist/react-datepicker.css";
import { MonthFrame } from "../../common/MonthFrame";

registerLocale("de", de);

export const CurrentMonth: React.FC<SlideBarItemProps> = ({
  value,
  onChange,
}) => {
  const date = new Date(value);

  return (
    <DatePicker
      selected={date}
      onChange={(nextDate: Date) => onChange(nextDate.getTime())}
      customInput={
        <div
          className={css`
            cursor: pointer;
          `}
        >
          <MonthFrame date={date} />
        </div>
      }
      locale="de"
      showMonthYearPicker
    />
  );
};
