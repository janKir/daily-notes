import React from "react";
import { isThisMonth } from "date-fns";
import { css } from "@linaria/core";
import { SlideBarItemProps } from "../../common/SlideBar";
import { Button } from "../../common/Button";
import { Hover } from "../../common/Hover";
import { formatDiffMonthsToday } from "../../../utils/formatDate";

export const SubCurrentMonth: React.FC<SlideBarItemProps> = ({
  value,
  onChange,
}) => {
  const date = new Date(value);

  const isCurrentMonth = isThisMonth(date);
  const diffMonthsFormatted = formatDiffMonthsToday(date);

  return (
    <Button onClick={() => onChange(Date.now())} disabled={isCurrentMonth}>
      <Hover>
        {(hover) => (
          <span className={relativeMonthsStyle}>
            {hover && !isCurrentMonth
              ? "zurück zu diesen Monat"
              : diffMonthsFormatted}
          </span>
        )}
      </Hover>
    </Button>
  );
};

const relativeMonthsStyle = css`
  font-size: 12px;
  font-style: italic;
`;
