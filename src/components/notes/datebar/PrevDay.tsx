import React from "react";
import { SlideBarItemProps } from "../../common/SlideBar";
import { Button } from "../../common/Button";
import { Flex } from "../../common/Flex";
import { DateFrame } from "../../common/DateFrame";
import { useDateIsInactiveOrSkipped } from "../../../hooks/useDateIsInactiveOrSkipped";

export const PrevDay: React.FC<SlideBarItemProps> = ({
  prevValue,
  onChange,
}) => {
  const prevDate = new Date(prevValue);
  const dateIsInactiveOrSkipped = useDateIsInactiveOrSkipped();

  return (
    <Button onClick={() => onChange(prevDate.getTime())}>
      <Flex row align="center">
        &lsaquo;
        <DateFrame
          date={prevDate}
          inactive={dateIsInactiveOrSkipped(prevDate)}
        />
      </Flex>
    </Button>
  );
};
