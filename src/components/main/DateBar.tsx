import React from "react";
import { addDays, subDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppContext } from "../../contexts/AppContext";
import { colors } from "../../styles/colors";
import { Button } from "../common/Button";
import { formatDate } from "../../utils/formatDate";

export const DateBar: React.FC = () => {
  const { date, setDate } = useAppContext();
  const [showPicker, setShowPicker] = React.useState(false);

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
        <div>
          <DatePicker
            selected={date}
            onChange={(nextDate: Date) => setDate(nextDate)}
            customInput={
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore -> props are inserted via ref
              <Button>{formatDate(date)}</Button>
            }
          />
        </div>
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
