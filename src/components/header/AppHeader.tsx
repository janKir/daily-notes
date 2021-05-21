import React from "react";
import { colors } from "../../styles/colors";

export const AppHeader: React.FC = () => {
  return (
    <header
      style={{
        height: 50,
        backgroundColor: colors.teaGreen1,
        padding: 16,
        display: "flex",
        alignItems: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: colors.black,
      }}
    >
      Daily Notes
    </header>
  );
};
