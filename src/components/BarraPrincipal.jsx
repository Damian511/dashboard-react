import { Toolbar, AppBar, Button, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const BarraPrincipal = () => {
  //constante con las clases para el sx de los componentes de mui
  const clases = {
    root: {
      flexGrow: 1,
    },
  };
  return (
    <div sx={clases.root}>
      <AppBar>
        <Toolbar>
          <Typography sx={clases.root} variant="h6">
            CDA Custodia
          </Typography>
          <Button color="inherit" endIcon={<LogoutIcon />}>
            Salir
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default BarraPrincipal;
