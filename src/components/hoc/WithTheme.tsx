import React, { useEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { light, dark } from "theme/theme";
import { IconButton } from "@material-ui/core";
import { BrightnessMedium } from "@material-ui/icons";

interface WithThemeProps {
  children: React.ReactNode;
}

const getActualThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("lightMode");
  if (!theme) {
    return true;
  }

  return theme === "true";
};

const updateActualThemeInLocalStorage = (status: boolean) => {
  localStorage.setItem("lightMode", status.toString());
};

const WithTheme: React.FC<WithThemeProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState(getActualThemeFromLocalStorage());
  const theme = createMuiTheme(themeMode ? light : dark);

  useEffect(() => {
    updateActualThemeInLocalStorage(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <IconButton
        style={{ position: "absolute", right: 5 }}
        onClick={() => setThemeMode((state) => !state)}
        aria-label="toggle theme"
      >
        <BrightnessMedium />
      </IconButton>
      {children}
    </ThemeProvider>
  );
};

export default WithTheme;
