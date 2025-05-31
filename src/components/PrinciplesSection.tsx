import { Box, Container, Typography } from "@mui/material";
import PrincipleCard from "./PrincipleCard";
import { principles } from "../styles/constants";

export default function PrinciplesSection() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" gutterBottom>
        Principles
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={4} mt={4}>
        {principles.map((item, index) => (
          <PrincipleCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </Box>
    </Container>
  );
}
