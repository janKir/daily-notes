import { css } from "@linaria/core";
import React from "react";
import { Flex } from "../common/Flex";
import { AppFooter } from "./footer/AppFooter";
import { AppHeader } from "./header/AppHeader";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Flex className={appStyle} align="stretch">
      <AppHeader />
      <Flex grow align="stretch" className={mainStyle} tag="main">
        {children}
      </Flex>
      <AppFooter />
    </Flex>
  );
};

const appStyle = css`
  height: 100%;
`;

const mainStyle = css`
  padding: 16px;
`;
