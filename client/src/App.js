import { ThemeProvider } from "@emotion/react";
import { themeSettings } from "./theme.js";
import FormData from "./components/form";
import { createTheme } from "@mui/material";
import { useMemo } from "react";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <FormData />
      </ThemeProvider>
    </div>
  );
}

export default App;
