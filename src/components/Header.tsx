import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

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
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "background.default",
        color: "text.secondary",
        zIndex: 10,
        position: "relative",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">
          Full Stack Web Development and Design
        </Typography>
        <Box>
          <Button onClick={() => handleNavigate("hero")} color="inherit">
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
