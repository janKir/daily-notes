import React from "react";
import { Link } from "react-router-dom";
import { useSettingsContext } from "../../contexts/SettingsContext";
import { daysOfWeekLabels } from "../../models/day-of-week/constants";
import { DayOfWeek } from "../../models/day-of-week/types";
import { Checkbox } from "../common/Checkbox";

export const SettingsPage: React.FC = () => {
  const { daysOfWeek, setDaysOfWeek } = useSettingsContext();
  return (
    <div>
      <small>
        <Link to="/">&lsaquo; zurück</Link>
      </small>
      <h1>Einstellungen</h1>
      <h2>Wochentage</h2>
      <p>Welche Wochentage sollen in der Zeitleiste angezeigt werden?</p>
      {(
        Object.entries(daysOfWeekLabels) as unknown as Array<
          [DayOfWeek, string]
        >
      ).map(([key, label]) => (
        <div>
          <Checkbox
            label={label}
            key={key}
            checked={daysOfWeek[key]}
            onChange={(checked) =>
              setDaysOfWeek((prev) => ({ ...prev, [key]: checked }))
            }
          />
        </div>
      ))}
    </div>
  );
};
