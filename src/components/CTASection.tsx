import { Box, Button, Container, Typography } from "@mui/material";
import bgImage from "../assets/images/skyline-stories-cta.jpg";

const CTASection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        py: { xs: 10, md: 14 },
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          py: { xs: 10, md: 14 },
          px: 2,
        }}
      >
        <Container>
          <Typography variant="h4" gutterBottom>
            Ready to get started?
          </Typography>
          <Typography variant="body1" mb={4}>
            You know about us, let’s talk about you.
          </Typography>
          <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
            <Button
              variant="outlined"
              size="large"
              sx={{ color: "white", borderColor: "white" }}
            >
              Check out our work
            </Button>
            <Button variant="contained" size="large" color="primary">
              Shoot us a message
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CTASection;
