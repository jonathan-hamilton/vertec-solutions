import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Vertec Solutions
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Profile
          </Button>
          <Button color="inherit" component={Link} to="/work">
            Work
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>

      <Box
        component="footer"
        sx={{ mt: 8, py: 4, textAlign: "center", color: "gray" }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Vertec Solutions LLC. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
}
