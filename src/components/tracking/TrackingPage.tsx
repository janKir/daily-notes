import React from "react";
import { MonthGrid } from "./MonthGrid";
import { Flex } from "../common/Flex";

export const TrackingPage: React.FC = () => {
  return (
    <Flex grow align="stretch">
      Tracking
      <MonthGrid date={new Date()} />
    </Flex>
  );
};
