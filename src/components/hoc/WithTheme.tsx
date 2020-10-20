import React, { useEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { light, dark, LIGHT, DARK } from "theme/theme";
import { IconButton } from "@material-ui/core";
import { BrightnessMedium } from "@material-ui/icons";

interface WithThemeProps {
  children: React.ReactNode;
}

const getActualThemeTypeFromLocalStorage = (): string => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    return LIGHT;
  }

  return theme;
};

const updateActualThemeInLocalStorage = (theme: string) => {
  localStorage.setItem("theme", theme);
};

const toggleThemeConstant = (themeConstant: string) =>
  themeConstant === LIGHT ? DARK : LIGHT;

const WithTheme: React.FC<WithThemeProps> = ({ children }) => {
  const [themeType, setthemeType] = useState(
    getActualThemeTypeFromLocalStorage()
  );
  const theme = createMuiTheme(themeType === LIGHT ? light : dark);

  useEffect(() => {
    updateActualThemeInLocalStorage(themeType);
  }, [themeType]);

  return (
    <ThemeProvider theme={theme}>
      <IconButton
        style={{ position: "absolute", right: 5 }}
        onClick={() => setthemeType(toggleThemeConstant)}
        aria-label="toggle theme"
      >
        <BrightnessMedium />
      </IconButton>
      {children}
    </ThemeProvider>
  );
};

export default WithTheme;
