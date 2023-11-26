import React from "react";
import { SlideBarItemProps } from "../../common/SlideBar";
import { DiffDays } from "../DiffDays";

export const SubCurrentDay: React.FC<SlideBarItemProps> = ({
  value,
  onChange,
}) => {
  const date = new Date(value);

  return <DiffDays date={date} onClick={() => onChange(Date.now())} />;
};
