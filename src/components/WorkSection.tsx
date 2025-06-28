import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    quote:
      "Jonathan was great to work with! He delivered the project on time and exceeded our expectations.",
    img: "/assets/images/headshot-1.jpg",
  },
  {
    name: "Jane Smith",
    quote:
      "Excellent experience. The communication was clear and the final product was flawless.",
    img: "/assets/images/headshot-2.jpg",
  },
  {
    name: "David Lee",
    quote:
      "Creative, reliable, and professional. Highly recommend Vertec Solutions!",
    img: "/assets/images/headshot-3.jpg",
  },
];

export default function WorkSection() {
  return (
    <Box sx={{ py: 10, bgcolor: "grey.100" }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Clients Talking (coming soon)
        </Typography>

        <Stack spacing={4} direction={{ xs: "column", md: "row" }}>
          {testimonials.map((testimonial, idx) => (
            <Paper key={idx} elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <Avatar
                alt={testimonial.name}
                src={testimonial.img}
                sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
              />
              <Typography variant="body1" gutterBottom>
                {testimonial.quote}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {testimonial.name}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
