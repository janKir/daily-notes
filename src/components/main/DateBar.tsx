import React from "react";
import { addDays, subDays } from "date-fns";
import { useAppContext } from "../../contexts/AppContext";
import { colors } from "../../styles/colors";
import { Button } from "../common/Button";
import { formatDate } from "../../utils/formatDate";

export const DateBar: React.FC = () => {
  const { date, setDate } = useAppContext();

  return (
    <nav
      style={{
        height: 50,
        backgroundColor: colors.teaGreen2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flexBasis: 0,
          flexGrow: 1,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Button onClick={() => setDate(subDays(date, 1))}>
          &lsaquo; {formatDate(subDays(date, 1))}
        </Button>
      </div>
      <div
        style={{
          flexBasis: 0,
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={() => {}}>{formatDate(date)} </Button>
      </div>
      <div
        style={{
          flexBasis: 0,
          flexGrow: 1,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={() => setDate(addDays(date, 1))}>
          {formatDate(addDays(date, 1))} &rsaquo;
        </Button>
      </div>
    </nav>
  );
};
