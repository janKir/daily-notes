import React from "react";
import { SlideBarItemProps } from "../../common/SlideBar";
import { Button } from "../../common/Button";
import { MonthFrame } from "../../common/MonthFrame";
import { Flex } from "../../common/Flex";

export const NextMonth: React.FC<SlideBarItemProps> = ({
  nextValue,
  onChange,
}) => {
  const nextDate = new Date(nextValue);

  return (
    <Button onClick={() => onChange(nextValue)}>
      <Flex row align="center">
        <MonthFrame date={nextDate} />
        &rsaquo;
      </Flex>
    </Button>
  );
};
