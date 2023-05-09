import React from "react";
import ReactDOM from "react-dom/client";

//importamos la librería de mui y la fuente roboto
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto";

//importamos el app para la renderización de los pages
import App from "./App.jsx";

//creamos la constante theme para modificar el tema principal de ser necesario
const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
