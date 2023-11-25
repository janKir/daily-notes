import React from "react";
import { optionalCall } from "../utils/optionalCall";

export function useLocalStorageState<T>(
  key: string,
  initialState: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setStateInternal] = React.useState<T>(
    optionalCall(JSON.parse, initialState)(localStorage.getItem(key)),
  );

  const setState: React.Dispatch<React.SetStateAction<T>> = (arg) => {
    const value: T = arg instanceof Function ? arg(state) : arg;
    localStorage.setItem(key, JSON.stringify(value));
    setStateInternal(value);
  };

  return [state, setState];
}
