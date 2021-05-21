import React from "react";
import { colors } from "../../styles/colors";

export const AppFooter: React.FC = () => {
  return (
    <footer
      style={{
        padding: 16,
        fontSize: 11,
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: colors.teaGreen1,
      }}
    >
      created by Jan Kirchner, 2021
    </footer>
  );
};
