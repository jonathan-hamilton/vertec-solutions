import { Box, Container, Typography, Paper, useTheme } from "@mui/material";
import { projects } from "../styles/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WorkSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );
  const theme = useTheme();

  return (
    <motion.div ref={ref} style={{ opacity, scale }}>
      <Box sx={{ bgcolor: theme.palette.background.paper, py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "text.primary" }}
          >
            Selected Works
          </Typography>

          <Box
            sx={{
              display: "grid",
              gap: 4,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              mt: 4,
            }}
          >
            {projects.map((project, idx) => (
              <Paper
                key={idx}
                elevation={3}
                sx={{
                  overflow: "hidden",
                  borderRadius: 2,
                  bgcolor: "grey.900",
                }}
              >
                <Box
                  component="a"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "block",
                    height: 240,
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {project.description}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
}
