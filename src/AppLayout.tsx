import { css } from "@linaria/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Flex } from "./components/common/Flex";
import { AppFooter } from "./components/footer/AppFooter";
import { AppHeader } from "./components/header/AppHeader";
import { MainPage } from "./components/main/MainPage";
import { SettingsPage } from "./components/settings/SettingsPage";

export const AppLayout: React.FC = () => {
  return (
    <Router>
      <Flex className={appStyle} align="stretch">
        <AppHeader />
        <Flex grow align="stretch" className={mainStyle} tag="main">
          <Switch>
            <Route path="/settings">
              <SettingsPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </Flex>
        <AppFooter />
      </Flex>
    </Router>
  );
};

const appStyle = css`
  height: 100%;
`;

const mainStyle = css`
  padding: 16px;
`;
