import { Box, Typography } from "@mui/material";

const PiePagina = () => {
  //creamos una constante con las clases de css para el sx
  const clases = {
    root: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      //bgcolor: "lightblue",
      p: 2,
      textAlign: "center",
    },
  };
  return (
    <Box sx={clases.root}>
      <Typography variant="body1" color="textSecondary" align="center">
        CDA Custodia - v1.0
      </Typography>
    </Box>
  );
};

export default PiePagina;
