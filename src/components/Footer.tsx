import { Box, Container, Typography, useTheme } from "@mui/material";
// import { footerOuterBoxSx, footerTitleSx } from "../styles/constants";

const FooterSection = () => {
  const theme = useTheme();

  return (
    <Box sx={theme.custom.footerOuterBoxSx}>
      <Container>
        <Typography
          sx={theme.custom.footerTitleSx?.(theme)}
          variant="h6"
          gutterBottom
        >
          Vertec Solutions
        </Typography>

        {/* <Stack direction="row" spacing={1}>
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
        </Stack> */}

        <Typography variant="body2" color="text.secondary" mt={2}>
          Copyright © {new Date().getFullYear()} | VertecSolutions LLC
        </Typography>
      </Container>
    </Box>
  );
};

export default FooterSection;
