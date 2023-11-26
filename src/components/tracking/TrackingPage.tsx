import React from "react";
import { MonthGrid } from "./MonthGrid";
import { Flex } from "../common/Flex";
import { DayCell } from "./DayCell";
import { TrackingContextProvider } from "../../contexts/TrackingContext";

export const TrackingPage: React.FC = () => {
  return (
    <Flex grow align="stretch">
      <TrackingContextProvider>
        Tracking
        <MonthGrid date={new Date()} Cell={DayCell} />
      </TrackingContextProvider>
    </Flex>
  );
};
