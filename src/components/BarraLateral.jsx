import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";

const BarraLateral = ({ items }) => {
  const clases = {
    root: {
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper",
    },
  };
  return (
    <Card sx={ { marginLeft: 2 }}>
      <Box sx={clases.root}>
        <List>
          {items.map(({ text, path }, i) => (
            <ListItem disablePadding key={i}>
              <ListItemButton component={Link} to={path}>
                <ListItemText>{text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
};

export default BarraLateral;
