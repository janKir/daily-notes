import React from "react";
import de from "date-fns/locale/de";
import DatePicker, { registerLocale } from "react-datepicker";
import { css } from "@linaria/core";
import { SlideBarItemProps } from "../../common/SlideBar";
import { DateFrame } from "../../common/DateFrame";
import { useDateIsInactiveOrSkipped } from "../../../hooks/useDateIsInactiveOrSkipped";

registerLocale("de", de);

export const CurrentDay: React.FC<SlideBarItemProps> = ({
  value,
  onChange,
}) => {
  const date = new Date(value);

  const dateIsInactiveOrSkipped = useDateIsInactiveOrSkipped();

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
          <DateFrame date={date} inactive={dateIsInactiveOrSkipped(date)} />
        </div>
      }
      locale="de"
    />
  );
};
