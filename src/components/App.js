import React, { useState } from "react";

import makeStyles, {
  StyledH1,
  StyledH2,
  StyledSpan,
} from "../styles/AppStyles";
import TodoApp from "./TodoApp";
import GlobalStyle from "../styles/global/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme/theme";
import { StyledHeader } from "../styles/AppStyles";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const classes = makeStyles();
  const [theme, setTheme] = useState(lightTheme);
  const [checked, setChecked] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className={classes.App}>
        <DarkModeToggle
          onChange={() =>
            setTheme(theme === lightTheme ? darkTheme : lightTheme)
          }
          checked={!!(theme === darkTheme)}
        />
        <StyledHeader>
          <StyledH1>
            para<StyledSpan>HACER</StyledSpan>
          </StyledH1>
          <StyledH2>Empieza el día con tu propósito en mente</StyledH2>
        </StyledHeader>
        <TodoApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
