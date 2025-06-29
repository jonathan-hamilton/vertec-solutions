import { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import contactBg from "../assets/images/react-contact-background.jpg";
import { contactBackgroundBoxSx } from "../styles/constants";

export default function Contact() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const theme = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSnackbarOpen(true);
  };

  return (
    <Container
      maxWidth="md"
      sx={{ py: 6, color: theme.palette.text.secondary }}
    >
      <Box
        sx={{
          ...contactBackgroundBoxSx,
          backgroundImage: `url(${contactBg})`,
          position: "relative", // Needed for overlay positioning
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)", // Adjust opacity as needed
            zIndex: 1,
            borderRadius: 4,
            pointerEvents: "none",
          }}
        />
        {/* Content above overlay */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: theme.palette.text.primary }}
          >
            Let's connect!
          </Typography>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              mt: 4,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
            }}
          >
            <Box component="form" onSubmit={handleSubmit} noValidate>
              {/* Name/Email row */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  required
                  sx={{ flex: 1 }}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  required
                  sx={{ flex: 1 }}
                />
              </Box>
              {/* Message field */}
              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              {/* Submit button */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" variant="contained">
                  Send Message
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Or contact us here:
        </Typography>
        <IconButton href="mailto:jhamilton.bsit@gmail.com" target="_blank">
          <Email />
        </IconButton>
        {/* <IconButton href="https://github.com/jonathan-hamilton" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/jonathanhamiltondev"
          target="_blank"
        >
          <LinkedIn />
        </IconButton> */}
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Message sent!"
      />
    </Container>
  );
}
