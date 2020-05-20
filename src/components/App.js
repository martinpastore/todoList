import React, { useState } from "react";
import styled from "styled-components";

import { lightTheme, darkTheme } from "../styles/theme/theme";
import { ThemeProvider } from "styled-components";
import { Header, H1, Span, H2, Button } from "../styles/AppStyles";
import TodoApp from "./TodoApp";
import GlobalStyle from "../styles/global/GlobalStyles";
import DarkModeToggle from "react-dark-mode-toggle";

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Flex>
          <DarkModeToggle
            size={80}
            onChange={() =>
              setTheme(theme === lightTheme ? darkTheme : lightTheme)
            }
            checked={!!(theme === darkTheme)}
          />
        </Flex>
        <Header>
          <H1>
            para<Span>HACER</Span>
          </H1>
          <H2>Empieza el día con tu propósito en mente</H2>
        </Header>
        <TodoApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
