import { Box, Container, Typography, Button } from "@mui/material";
import bridgeImage from "../assets/images/skyline-stories-hero1.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600, 1000], [1, 1, 0]);

  return (
    <Box sx={{ position: "sticky", top: 0, zIndex: 1 }}>
      <motion.div style={{ opacity }}>
        <Container
          sx={{
            textAlign: "center",
            pt: 6,
            pb: 2,
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "3rem", md: "6rem" },
              color: "black",
            }}
          >
            Vertec Solutions
          </Typography>
        </Container>
      </motion.div>

      <motion.div style={{ opacity }}>
        <Box
          sx={{
            height: "60vh",
            backgroundImage: `url(${bridgeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 0,
            },
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
            }}
          >
            <Typography variant="h2" fontWeight={700} gutterBottom>
              Better design, better experiences.
            </Typography>
            <Typography variant="h6" paragraph>
              As website and web application developers, we understand the
              perfect user interface should look good and work even better.
              Alongside our clients, we uncover problems and solve them. In
              short, we create better online experiences.
            </Typography>
            <Button
              href="/contact"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3 }}
            >
              Contact
            </Button>
          </Container>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
