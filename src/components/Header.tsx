import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, useTheme } from "@mui/material";

export default function HeaderSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigate = (section: string) => {
    if (location.pathname === "/") {
      scrollToSection(section);
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <AppBar position="static" elevation={0} sx={theme.custom.appBarSx}>
      <Toolbar sx={theme.custom.toolbarSx}>
        <Button
          color="inherit"
          onClick={() => navigate("/")}
          sx={theme.custom.brandButtonSx}
        >
          Full Stack Web Development and Design
        </Button>
        <Box>
          <Button onClick={() => navigate("/")} color="inherit">
            Profile
          </Button>
          <Button onClick={() => handleNavigate("services")} color="inherit">
            Services
          </Button>
          <Button onClick={() => handleNavigate("principles")} color="inherit">
            Principles
          </Button>
          <Button onClick={() => handleNavigate("work")} color="inherit">
            Work
          </Button>
          <Button href="/contact" color="inherit">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
