import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function HeaderSection() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ zIndex: 10, position: "relative" }} // 🛠️ Ensure it layers above HeroSection
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">
          Full Stack Web Development and Design
        </Typography>
        <Box>
          <Button href="/profile" color="inherit">
            Profile
          </Button>
          <Button href="/work" color="inherit">
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
