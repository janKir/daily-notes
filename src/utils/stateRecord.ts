import React from "react";

export function stateRecord<
  T,
  K extends string | number | symbol = string | number | symbol
>(
  record: Partial<Record<K, T>>,
  setRecord: React.Dispatch<React.SetStateAction<Partial<Record<K, T>>>>
): (
  key: K
) => [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>] {
  return (key: K) => {
    const state = record[key];
    const setState = (value: React.SetStateAction<T | undefined>): void =>
      setRecord((prevRecord) => ({
        ...prevRecord,
        [key]: value instanceof Function ? value(prevRecord[key]) : value,
      }));

    return [state, setState];
  };
}
