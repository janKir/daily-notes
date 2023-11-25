import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@linaria/core";
import { Flex } from "../../common/Flex";

const menuItems = [
  { label: "Notes", path: "/" },
  { label: "Tracking", path: "/tracking" },
];

export const HeaderMenu: React.FC = () => {
  return (
    <Flex row grow justify="flex-end">
      {menuItems.map(({ label, path }) => (
        <span key={path} className={menuItemStyle}>
          <NavLink
            to={path}
            className={({ isActive }) => (isActive ? activeMenuItemStyle : "")}
          >
            {label}
          </NavLink>
        </span>
      ))}
    </Flex>
  );
};

const menuItemStyle = css`
  padding: 0.5rem;
`;

const activeMenuItemStyle = css`
  font-weight: bold;
`;
