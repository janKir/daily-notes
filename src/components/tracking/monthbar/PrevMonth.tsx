import React from "react";
import { SlideBarItemProps } from "../../common/SlideBar";
import { Button } from "../../common/Button";
import { MonthFrame } from "../../common/MonthFrame";
import { Flex } from "../../common/Flex";

export const PrevMonth: React.FC<SlideBarItemProps> = ({
  prevValue,
  onChange,
}) => {
  const prevDate = new Date(prevValue);

  return (
    <Button onClick={() => onChange(prevValue)}>
      <Flex row align="center">
        &lsaquo;
        <MonthFrame date={prevDate} />
      </Flex>
    </Button>
  );
};
