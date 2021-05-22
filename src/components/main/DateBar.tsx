import React from "react";
import { addDays, differenceInDays, formatRelative, subDays } from "date-fns";
import { useAppContext } from "../../contexts/AppContext";
import { colors } from "../../styles/colors";
import { Button } from "../common/Button";
import { formatDate } from "../../utils/formatDate";

const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "auto", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

export const DateBar: React.FC = () => {
  const { date, setDate } = useAppContext();

  return (
    <nav
      style={{
        height: 50,
        backgroundColor: colors.teaGreen2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button onClick={() => setDate(subDays(date, 1))}>
        {/* {formatRelative(subDays(date, 1), today)} */}
        {formatDate(subDays(date, 1))}
      </Button>
      <Button onClick={() => {}}>{formatDate(date)} </Button>
      <Button onClick={() => setDate(addDays(date, 1))}>
        {formatDate(addDays(date, 1))}
      </Button>
    </nav>
  );
};
