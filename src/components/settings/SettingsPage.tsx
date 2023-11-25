import React from "react";
import { Link } from "react-router-dom";
import { useSettingsContext } from "../../contexts/SettingsContext";
import { daysOfWeekLabels } from "../../models/day-of-week/constants";
import { Checkbox } from "../common/Checkbox";
import { listDaysOfWeek } from "../../utils/listDaysOfWeek";
import { DayOfWeek } from "../../models/day-of-week/types";

export const SettingsPage: React.FC = () => {
  const {
    firstDayOfWeek,
    setFirstDayOfWeek,
    daysOfWeek,
    setDaysOfWeek,
    trackingActivated,
    setTrackingActivated,
  } = useSettingsContext();

  const allDaysOfWeek = React.useMemo(
    () => listDaysOfWeek(firstDayOfWeek),
    [firstDayOfWeek]
  );

  return (
    <div>
      <small>
        <Link to="/">&lsaquo; zurück</Link>
      </small>
      <h1>Einstellungen</h1>
      <h2>Wochentage</h2>
      <p>Mit welchem Wochentag beginnt die Woche?</p>
      <select
        value={firstDayOfWeek}
        onChange={(e) => setFirstDayOfWeek(+e.target.value as DayOfWeek)}
      >
        {allDaysOfWeek.map((key) => (
          <option key={key} value={key}>
            {daysOfWeekLabels[key]}
          </option>
        ))}
      </select>
      <p>Welche Wochentage sollen in der Zeitleiste angezeigt werden?</p>
      {allDaysOfWeek.map((key) => (
        <div key={key}>
          <Checkbox
            label={daysOfWeekLabels[key]}
            checked={daysOfWeek[key]}
            onChange={(checked) =>
              setDaysOfWeek((prev) => ({ ...prev, [key]: checked }))
            }
          />
        </div>
      ))}

      <h2>Tracking</h2>
      <Checkbox
        label="Tracking aktivieren"
        checked={trackingActivated}
        onChange={setTrackingActivated}
      />
    </div>
  );
};
