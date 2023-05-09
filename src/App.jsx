import { Grid, Card } from "@mui/material";
import BarraPrincipal from "./components/BarraPrincipal";
import PiePagina from "./components/PiePagina";
import BarraLateral from "./components/BarraLateral";
//importamos el router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//importamos los paginas
import Inicio from "./pages/Inicio";
import About from "./pages/About";

function App() {
  const menuItems = [
    { text: "Inicio", path: "/" },
    { text: "About", path: "/about" },
  ];
  return (
    <>
      <Router>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <BarraPrincipal />
          </Grid>
          <Grid item xs={3}>
            <BarraLateral items={menuItems} />
          </Grid>
          <Grid item xs={9} sx={{ marginLeft: -7}}>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/about" element={<About />} />
              </Routes>
          </Grid>

          <Grid item xs={12}>
            <PiePagina />
          </Grid>
        </Grid>
      </Router>
    </>
  );
}

export default App;
