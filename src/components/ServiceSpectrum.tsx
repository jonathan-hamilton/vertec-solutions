import { Box, Typography, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";

const panels = [
  {
    title: "Web Apps & Web Sites",
    description:
      "This is where problem solving meets visual impact. Products and users, design and experiences unite.",
    color: "#e0f7fa",
  },
  {
    title: "WordPress Development",
    description:
      "Using WordPress and an expert vision, we will take your application to the next level.",
    color: "#fce4ec",
  },
  {
    title: "Front & Backend Development",
    description:
      "We will help in all aspects of Webapp Development to bridge the gap between design and reality.",
    color: "#e8f5e9",
  },
];

export default function ServiceSpectrum() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          position: "relative",
          backgroundColor: "black",
          borderRadius: 4,
          overflow: "hidden",
          pb: 10,
          mx: "auto",
          zIndex: 1,
        }}
      >
        {/* Sticky Title */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            textAlign: "center",
            py: 4,
            backgroundColor: "black",
            zIndex: 10,
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            Service Spectrum
          </Typography>
        </Box>

        {/* Vertical Stacked Panels with Animations */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            px: 2,
            mt: 4,
          }}
        >
          {panels.map((panel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: panel.color,
                  p: 4,
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {panel.title}
                </Typography>
                <Typography variant="body1">{panel.description}</Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
