import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterSection = () => {
  return (
    <Box sx={{ bgcolor: "grey.100", py: 6, position: "relative", zIndex: 10 }}>
      <Container>
        <Typography variant="h6" gutterBottom>
          Vertec Solutions
        </Typography>

        <Stack direction="row" spacing={1}>
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="Facebook"
            href="https://www.facebook.com"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            href="https://www.instagram.com"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
        </Stack>

        <Typography variant="body2" color="text.secondary" mt={2}>
          Copyright © {new Date().getFullYear()} | VertecSolutions LLC
        </Typography>
      </Container>
    </Box>
  );
};

export default FooterSection;
