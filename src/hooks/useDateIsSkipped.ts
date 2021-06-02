import { useAppContext } from "../contexts/AppContext";
import { getDateKey } from "../utils/getDateKey";

export function useDateIsSkipped(): (date: Date) => boolean {
  const { notes } = useAppContext();

  return (date: Date): boolean => notes[getDateKey(date)] === "skip";
}
