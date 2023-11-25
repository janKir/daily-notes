import React from "react";
import { css } from "@linaria/core";
import { differenceInCalendarDays } from "date-fns";
import { formatDiffDaysToday } from "../../utils/formatDate";
import { Button } from "../common/Button";
import { Hover } from "../common/Hover";

export interface DiffDaysProps {
  date: Date;
  onClick: () => void;
}

export const DiffDays: React.FC<DiffDaysProps> = ({ date, onClick }) => {
  const isToday = differenceInCalendarDays(date, new Date()) === 0;
  const diffDaysFormatted = formatDiffDaysToday(date);

  return (
    <Button onClick={onClick} disabled={isToday}>
      <Hover>
        {(hover) => (
          <span className={relativeDaysStyle}>
            {hover && !isToday ? "zurück zu Heute" : diffDaysFormatted}
          </span>
        )}
      </Hover>
    </Button>
  );
};

const relativeDaysStyle = css`
  font-size: 12px;
  font-style: italic;
`;
