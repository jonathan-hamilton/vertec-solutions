import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  description: string;
}

export default function PrincipleCard({ title, description }: Props) {
  return (
    <Box sx={{ flex: "1 1 300px", minWidth: 250 }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}
