import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom"; // Add this import
import bridgeImage from "../assets/images/skyline-stories-hero1.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_DESCRIPTION } from "../styles/constants";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600, 1000], [1, 1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 0.4]);
  const theme = useTheme();

  return (
    <motion.div style={{ opacity, scale, transformOrigin: "bottom center" }}>
      <Container maxWidth="xl" sx={{ px: 0 }}>
        <Box
          sx={{
            ...theme.custom.heroSectionOuterBoxSx,
            backgroundImage: `url(${bridgeImage})`,
          }}
        >
          <Box sx={theme.custom.heroSectionInnerBoxSx}>
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
