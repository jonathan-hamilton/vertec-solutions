import { Box, Paper, Typography } from "@mui/material";
import { Build, Language, Code } from "@mui/icons-material";

const services = [
  {
    title: "Web Apps & Web Sites",
    description:
      "This is where problem solving meets visual impact. Products and users, design and experiences unite.",
    icon: <Language fontSize="large" />,
  },
  {
    title: "WordPress Development",
    description:
      "Using WordPress and an expert vision, we will take your application to the next level.",
    icon: <Build fontSize="large" />,
  },
  {
    title: "Front & Backend Development",
    description:
      "We will help in all aspects of Webapp Development to bridge the gap between design and reality.",
    icon: <Code fontSize="large" />,
  },
];

export default function ServiceSpectrum() {
  return (
    <Box sx={{ textAlign: "center", py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Service Spectrum
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4,
          mt: 4,
        }}
      >
        {services.map((service, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 4,
              maxWidth: 300,
              minHeight: 250,
              flex: "1 1 250px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box mb={2}>{service.icon}</Box>
            <Typography variant="h6" gutterBottom>
              {service.title}
            </Typography>
            <Typography variant="body2">{service.description}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
