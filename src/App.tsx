import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className="App">
        <Transactions />
      </div>
    </ThemeProvider>
  );
}

export default App;
