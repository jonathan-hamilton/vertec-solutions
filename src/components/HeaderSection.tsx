import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function HeaderSection() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Vertec Solutions</Typography>
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
