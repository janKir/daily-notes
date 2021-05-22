import React from "react";
import { css } from "@linaria/core";
import { colors } from "../../styles/colors";
import { Flex } from "../common/Flex";

export const AppHeader: React.FC = () => {
  return (
    <Flex row align="center" className={headerStyle} tag="header">
      Daily Notes
    </Flex>
  );
};

const headerStyle = css`
  height: 50px;
  background-color: ${colors.teaGreen1};
  padding: 16px;
  display: flex;
  font-weight: bold;
  color: ${colors.black};
`;
