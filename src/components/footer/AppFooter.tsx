import React from "react";
import { colors } from "../../styles/colors";
import github from "../../assets/github.svg";

export const AppFooter: React.FC = () => {
  return (
    <footer
      style={{
        padding: 16,
        fontSize: 11,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
      <span
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        created by Jan Kirchner, 2021{" "}
        <a
          href="https://github.com/janKir/daily-notes"
          rel="external nofollow noreferrer"
          target="_blank"
          title="See on Github"
          style={{ margin: 5 }}
        >
          <img src={github} alt="Github logo" />
        </a>
      </span>
    </footer>
  );
};
