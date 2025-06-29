import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Add this import
import bridgeImage from "../assets/images/skyline-stories-hero1.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_DESCRIPTION } from "../styles/constants";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600, 1000], [1, 1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 0.4]);

  return (
    <motion.div style={{ opacity, scale, transformOrigin: "bottom center" }}>
      <Container maxWidth="xl" sx={{ px: 0 }}>
        <Box
          sx={{
            minHeight: "70vh",
            height: "60vh",
            backgroundImage: `url(${bridgeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            mb: 20,
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 0,
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="h2" fontWeight={700} gutterBottom>
              Better design, better experiences.
            </Typography>
            <Typography variant="h6" paragraph>
              {HERO_DESCRIPTION}
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3 }}
            >
              Contact
            </Button>
          </Box>
        </Box>
      </Container>
    </motion.div>
    // </Box>
  );
};

export default HeroSection;
