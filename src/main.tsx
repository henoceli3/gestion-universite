import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { antAppToken, appTheme, chakraTheme } from "./config/Theme.ts";
import locale from "antd/locale/fr_FR";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <ConfigProvider locale={locale} theme={{ token: antAppToken }}>
        <ChakraProvider theme={chakraTheme}>
          <App />
        </ChakraProvider>
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>
);
