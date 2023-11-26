import React from "react";
import { SlideBarItemProps } from "../../common/SlideBar";
import { Button } from "../../common/Button";
import { Flex } from "../../common/Flex";
import { DateFrame } from "../../common/DateFrame";
import { useDateIsInactiveOrSkipped } from "../../../hooks/useDateIsInactiveOrSkipped";

export const NextDay: React.FC<SlideBarItemProps> = ({
  nextValue,
  onChange,
}) => {
  const nextDate = new Date(nextValue);
  const dateIsInactiveOrSkipped = useDateIsInactiveOrSkipped();

  return (
    <Button onClick={() => onChange(nextDate.getTime())}>
      <Flex row align="center">
        <DateFrame
          date={nextDate}
          inactive={dateIsInactiveOrSkipped(nextDate)}
        />
        &rsaquo;
      </Flex>
    </Button>
  );
};
