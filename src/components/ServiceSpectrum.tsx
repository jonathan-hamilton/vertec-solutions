import { Box, Typography, IconButton, Popover, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { panels } from "../styles/constants";
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
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: "white",
          py: 10,
          px: { xs: 4, md: 2 },
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            px: 8,
            pb: 6,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              Service Spectrum
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 500,
              textAlign: "left",
              color: "grey.500",
              mt: { xs: 13, md: 7 },
            }}
          >
            <Typography>
              Enterprise technology skills for your small or medium sized
              business. We specialize in building/supporting websites and web
              applications, API integrations, and custom software.
            </Typography>
          </Box>
        </Box>

        {/* Pop-out Panels */}
        <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
          {panels.map((panel, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#111",
                border: "1px solid grey",
                mb: 2,
                px: 3,
                py: 2,
                borderRadius: 1,
                position: "relative",
                cursor: "pointer",
              }}
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
              sx: {
                backgroundColor: "#5c5c5c",
                border: "1px solid #444",
                color: "#fff",
                px: 2,
                py: 1.5,
                borderRadius: 2,
                maxWidth: 700,
                boxShadow: 3,
              },
            },
          }}
        >
          {selectedIndex !== null && (
            <Box
              sx={{
                backgroundColor: "#1c1c1c",
                border: "1px solid #444",
                borderRadius: "8px",
                p: 3,
              }}
            >
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
              <Typography
                sx={{
                  color: "grey.300",
                  whiteSpace: "pre-line",
                  mt: 2,
                  fontSize: "0.875rem",
                }}
              >
                {panels[selectedIndex].description}
              </Typography>
            </Box>
          )}
        </Popover>
      </Box>
    </motion.div>
  );
}
