import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { stateRecord } from "../../utils/stateRecord";
import { Tracking } from "./Tracking";

export interface TrackingByDateProps {
  dateKey: string;
  readonly?: boolean;
}

export const TrackingByDate: React.FC<TrackingByDateProps> = ({
  dateKey,
  readonly,
}) => {
  const { trackings, setTrackings } = useAppContext();
  const [tracking, setTracking] = stateRecord(trackings, setTrackings)(dateKey);

  return (
    <Tracking
      planned={tracking?.planned}
      onSetPlanned={
        readonly
          ? undefined
          : (planned) =>
              setTracking((prevTracking) => ({
                ...prevTracking,
                planned,
              }))
      }
      actual={tracking?.actual}
      onSetActual={
        readonly
          ? undefined
          : (actual) =>
              setTracking((prevTracking) => ({
                ...prevTracking,
                actual,
              }))
      }
    />
  );
};
