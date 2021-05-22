import React from "react";
import { colors } from "../../styles/colors";

export const AppFooter: React.FC = () => {
  return (
    <footer
      style={{
        padding: 16,
        fontSize: 11,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: colors.teaGreen1,
        color: colors.black,
        fontStyle: "italic",
      }}
    >
      <span>
        Be better prepared for your daily stand-up meeting! Keep track of what
        you've done the day before, what's on your plate for today, and what
        issues you want to discuss with your team.
      </span>
      <span>created by Jan Kirchner, 2021</span>
    </footer>
  );
};
