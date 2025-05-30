import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

export default function Proposal() {
  const { slug } = useParams();

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Proposal: {slug?.replaceAll("-", " ")}
      </Typography>
      <Typography>
        This is a private proposal page for <strong>{slug}</strong>.
      </Typography>
    </Container>
  );
}
