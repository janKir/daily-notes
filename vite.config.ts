/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import linaria from "@linaria/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    linaria({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
  ],
});
