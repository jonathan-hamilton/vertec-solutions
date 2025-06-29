import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { appBarSx, toolbarSx, brandButtonSx } from "../styles/constants";

export default function HeaderSection() {
  const navigate = useNavigate();
  const location = useLocation();

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
    <AppBar position="static" elevation={0} sx={appBarSx}>
      <Toolbar sx={toolbarSx}>
        <Button
          color="inherit"
          onClick={() => navigate("/")}
          sx={brandButtonSx}
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
