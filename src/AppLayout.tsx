import { css } from "@linaria/core";
import React from "react";
import { Flex } from "./components/common/Flex";
import { AppFooter } from "./components/footer/AppFooter";
import { AppHeader } from "./components/header/AppHeader";
import { AppMain } from "./components/main/AppMain";

export const AppLayout: React.FC = () => {
  return (
    <Flex className={appStyle} align="stretch">
      <AppHeader />
      <AppMain />
      <AppFooter />
    </Flex>
  );
};

const appStyle = css`
  height: 100%;
`;
