import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "../feature/catalog/Catalog";
import Header from "./Header";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const paletteType = isDarkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });
  function ChangThemeMode() {
    setDarkMode(!isDarkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isDarkMode={isDarkMode} ChangThemeMode={ChangThemeMode} />
      <Catalog />
    </ThemeProvider>
  );
}

export default App;
