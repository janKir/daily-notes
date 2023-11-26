import React from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { addMonths, subMonths } from "date-fns";
import { MonthGrid } from "./MonthGrid";
import { Flex } from "../common/Flex";
import { DayCell } from "./DayCell";
import { TrackingContextProvider } from "../../contexts/TrackingContext";
import { MonthBar } from "./monthbar/MonthBar";

export const TrackingPage: React.FC = () => {
  const [month, setMonth] = React.useState(new Date());

  useHotkeys("mod+left", () => {
    setMonth((m) => subMonths(m, 1));
  });
  useHotkeys("mod+right", () => {
    setMonth((m) => addMonths(m, 1));
  });
  useHotkeys(["mod+up", "mod+down"], () => {
    setMonth(() => new Date());
  });

  return (
    <Flex grow align="stretch">
      <TrackingContextProvider>
        <MonthBar month={month} setMonth={setMonth} />
        <MonthGrid date={month} Cell={DayCell} />
      </TrackingContextProvider>
    </Flex>
  );
};
