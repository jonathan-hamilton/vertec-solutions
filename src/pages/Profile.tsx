import HeroSection from "../components/HeroSection";
import ServiceSpectrum from "../components/ServiceSpectrum";
import PrinciplesSection from "../components/PrinciplesSection";
import WorkSection from "../components/WorkSection";
import CTASection from "../components/CTASection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Profile() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200, 400], [1, 1, 0]);
  const theme = useTheme();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for section to render
      }
    }
  }, [location]);

  return (
    <>
      <Box sx={{ position: "sticky", top: 0, zIndex: -1 }}>
        <motion.div style={{ opacity }}>
          <Container
            sx={{
              textAlign: "center",
              pt: 6,
              pb: 2,
              backgroundColor: "background.default",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "3rem", md: "6rem" },
                color: theme.palette.text.secondary,
              }}
            >
              Vertec Solutions
            </Typography>
          </Container>
        </motion.div>
      </Box>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <ServiceSpectrum />
      </div>
      <div id="principles">
        <PrinciplesSection />
      </div>
      <div id="work">
        <WorkSection />
      </div>
      <CTASection />
    </>
  );
}
