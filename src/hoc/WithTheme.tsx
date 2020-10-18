import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { light, dark } from "../theme/theme";
import { IconButton } from "@material-ui/core";
import { BrightnessMedium } from "@material-ui/icons";

interface WithThemeProps {
  children: React.ReactNode;
}

const WithTheme: React.FC<WithThemeProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState(true);
  const theme = createMuiTheme(themeMode ? light : dark);

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
