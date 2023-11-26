import React from "react";

export type TrackingEditMode = "planned" | "actual" | false;

export interface TrackingContenxtI {
  editMode: TrackingEditMode;
  setEditMode: React.Dispatch<React.SetStateAction<TrackingEditMode>>;
}

export const TrackingContext = React.createContext<
  TrackingContenxtI | undefined
>(undefined);

export const TrackingContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [editMode, setEditMode] = React.useState<TrackingEditMode>(false);

  const contextValue = React.useMemo(
    () => ({ editMode, setEditMode }),
    [editMode, setEditMode],
  );

  return (
    <TrackingContext.Provider value={contextValue}>
      {children}
    </TrackingContext.Provider>
  );
};

export function useTrackingContext(): TrackingContenxtI {
  const trackingContext = React.useContext(TrackingContext);
  if (!trackingContext) {
    throw new Error(
      "tried to access TrackingContext outside the scope of its provider",
    );
  }
  return trackingContext;
}
