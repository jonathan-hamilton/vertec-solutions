import { Box, Typography, IconButton, Popover, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import {
  HERO_HEADER_DESCRIPTION as SERVICE_SPECTRUM_HEADER_DESCRIPTION,
  panels,
} from "../styles/constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceSpectrum() {
  const ref = useRef(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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

  const handleOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedIndex(null);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        transformOrigin: "bottom center",
      }}
    >
      <Box sx={theme.custom.serviceSpectrumOuterBoxSx}>
        {/* Header Section */}
        <Box sx={theme.custom.serviceSpectrumHeaderBoxSx}>
          <Box>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={theme.custom.serviceSpectrumHeaderTypographyBoxSx}
            >
              Service Spectrum
            </Typography>
          </Box>

          <Box sx={theme.custom.serviceSpectrumHeaderDescriptionBoxSx}>
            <Typography>{SERVICE_SPECTRUM_HEADER_DESCRIPTION}</Typography>
          </Box>
        </Box>

        {/* Pop-out Panels */}
        <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
          {panels.map((panel, index) => (
            <Box
              key={index}
              sx={theme.custom.serviceSpectrumPopoutPanelBoxSx}
              onClick={(e) => handleOpen(e, index)}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">{panel.title}</Typography>
                <ExpandMoreIcon sx={{ color: "white" }} />
              </Box>
            </Box>
          ))}
        </Box>

        {/* Pop-out Description */}
        <Popover
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          slotProps={{
            paper: {
              sx: theme.custom.serviceSpectrumPopoutDescriptionPopoverSx,
            },
          }}
        >
          {selectedIndex !== null && (
            <Box sx={theme.custom.serviceSpectrumPopoutOuterBoxSx}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontWeight="bold">
                  {panels[selectedIndex].title}
                </Typography>
                <IconButton
                  onClick={handleClose}
                  sx={{ color: "white", ml: 2 }}
                  size="small"
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Typography sx={theme.custom.serviceSpectrumPopoutTypographySx}>
                {panels[selectedIndex].description}
              </Typography>
            </Box>
          )}
        </Popover>
      </Box>
    </motion.div>
  );
}
