import React from "react";
import { MonthGrid } from "./MonthGrid";
import { Flex } from "../common/Flex";
import { DayCell } from "./DayCell";
import { TrackingContextProvider } from "../../contexts/TrackingContext";
import { MonthBar } from "./monthbar/MonthBar";

export const TrackingPage: React.FC = () => {
  const [month, setMonth] = React.useState(new Date());

  return (
    <Flex grow align="stretch">
      <TrackingContextProvider>
        <MonthBar month={month} setMonth={setMonth} />
        <MonthGrid date={month} Cell={DayCell} />
      </TrackingContextProvider>
    </Flex>
  );
};
