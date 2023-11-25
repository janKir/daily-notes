import React from "react";
import { css } from "@linaria/core";
import { colors } from "../../../styles/colors";
import { Flex } from "../../common/Flex";
import { HeaderMenu } from "./HeaderMenu";

export const AppHeader: React.FC = () => {
  return (
    <Flex row align="center" className={headerStyle} tag="header">
      <h1 className={titleStyle}>Daily Notes</h1>
      <HeaderMenu />
    </Flex>
  );
};

const headerStyle = css`
  height: 50px;
  background-color: ${colors.teaGreen1};
  padding: 16px;
  display: flex;
  color: ${colors.black};
`;

const titleStyle = css`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 1rem;
`;
