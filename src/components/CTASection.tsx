import { Box, Button, Container, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom"; // <-- Add this import
import bgImage from "../assets/images/skyline-stories-cta.jpg";
import theme from "../theme";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ opacity }}>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          ...theme.custom.ctaOuterBoxSx,
        }}
      >
        <Box sx={theme.custom.ctaInnerBoxSx}>
          <Container>
            <Typography variant="h4" gutterBottom>
              Ready to get started?
            </Typography>
            <Typography variant="body1" mb={4}>
              You know about us, let’s talk about you.
            </Typography>
            <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                color="primary"
                component={Link}
                to="/contact"
              >
                Shoot us a message
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </motion.div>
  );
};

export default CTASection;
