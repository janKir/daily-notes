import React from "react";
import { css } from "@linaria/core";
import { Link } from "react-router-dom";
import { colors } from "../../../styles/colors";
import github from "../../../assets/github.svg";
import { Flex } from "../../common/Flex";

export const AppFooter: React.FC = () => {
  return (
    <Flex tag="footer" className={footerStyle} align="stretch">
      <Flex row align="center" justify="center">
        <div>
          <Link to="/settings">Settings ⚙</Link>
        </div>
      </Flex>
      <Flex row align="center" justify="space-between">
        <span>
          Be better prepared for your daily stand-up meeting! Keep track of what
          you&apos;ve done the day before, what&apos;s on your plate for today,
          and what issues you want to discuss with your team.
        </span>
        <Flex row align="center">
          created by Jan Kirchner, 2021
          <a
            href="https://github.com/janKir/daily-notes"
            rel="external nofollow noreferrer"
            target="_blank"
            title="See on Github"
            className={githubLinkStyle}
          >
            <img src={github} alt="Github logo" />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

const footerStyle = css`
  padding: 16px;
  font-size: 11px;
  background-color: ${colors.teaGreen1};
  color: ${colors.black};
  font-style: italic;
`;

const githubLinkStyle = css`
  margin: 5px;
`;
