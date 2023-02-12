import React from "react";
import { Flex } from "../common/Flex";

export interface TrackingProps {
  planned?: number;
  actual?: number;
  onSetPlanned?: (planned: number) => void;
  onSetActual?: (actual: number) => void;
}

export const Tracking: React.FC<TrackingProps> = ({
  planned,
  actual,
  onSetPlanned,
  onSetActual,
}) => {
  return (
    <Flex row justify="space-evenly">
      <div>
        <label>
          Planned:{" "}
          <input
            type="number"
            value={planned ?? ""}
            onChange={(e) => onSetPlanned?.(Number(e.target.value))}
          />
          h
        </label>
      </div>
      <div>
        <label>
          Actual:{" "}
          <input
            type="number"
            value={actual ?? ""}
            onChange={(e) => onSetActual?.(Number(e.target.value))}
          />
          h
        </label>
      </div>
      <div>
        <span>Diff:</span>
        <div>{actual && planned ? actual - planned : "-"}</div>
      </div>
    </Flex>
  );
};
