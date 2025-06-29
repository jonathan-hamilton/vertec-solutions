import {
  Box,
  Tooltip,
  Typography,
  TooltipProps,
  useTheme,
} from "@mui/material";
import { ReactElement } from "react";
import Grow from "@mui/material/Grow";

interface PrincipleTooltipProps extends Omit<TooltipProps, "title"> {
  title: string;
  description: string;
  children: ReactElement;
}

export default function PrincipleTooltip({
  title,
  description,
  children,
  ...rest
}: PrincipleTooltipProps) {
  const theme = useTheme();

  return (
    <Tooltip
      {...rest}
      slots={{ transition: Grow }}
      enterDelay={250}
      leaveDelay={500}
      arrow
      slotProps={{ transition: { timeout: 300 } }}
      title={
        <Box sx={theme.custom.principlesTipBoxBoxSx}>
          <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
            {title}
          </Typography>
          <Typography variant="body2" fontSize="0.875rem">
            {description}
          </Typography>
        </Box>
      }
      componentsProps={{
        arrow: {
          sx: { color: "rgba(33, 33, 33, 0.9)" },
        },
      }}
    >
      {children}
    </Tooltip>
  );
}
