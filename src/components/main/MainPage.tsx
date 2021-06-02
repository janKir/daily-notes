import React from "react";
import { css } from "@linaria/core";
import { DateBar } from "./DateBar";
import { ContentContainer } from "./ContentContainer";
import { Flex } from "../common/Flex";

export const MainPage: React.FC = () => {
  return (
    <div>
      <DateBar />
      <ContentContainer />
    </div>
  );
};
