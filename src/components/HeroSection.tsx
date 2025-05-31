import { Box, Container, Typography } from "@mui/material";
import bridgeImage from "../assets/images/skyline-stories-hero1.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bridgeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h2" fontWeight={700} gutterBottom>
          Better design, better experiences.
        </Typography>
        <Typography variant="h6">
          As web site and web application developers, we understand the perfect
          user interface should look good and work even better. Alongside our
          clients, we uncover problems and solve them. In short, we create
          better online experiences.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
