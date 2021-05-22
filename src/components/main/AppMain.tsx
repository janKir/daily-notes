import React from "react";
import { css } from "@linaria/core";
import { DateBar } from "./DateBar";
import { ContentContainer } from "./ContentContainer";
import { Flex } from "../common/Flex";

export const AppMain: React.FC = () => {
  return (
    <Flex grow align="stretch" className={mainStyle} tag="main">
      <DateBar />
      <ContentContainer />
    </Flex>
  );
};

const mainStyle = css`
  padding: 16px;
`;
