import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { panels } from "../styles/constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceSpectrum() {
  const [expanded, setExpanded] = useState<number | false>(false);
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const spectrumOpacity = useTransform(scrollY, [600, 1000, 1800], [0, 1, 0]);

  const handleChange =
    (panelIndex: number) =>
    (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panelIndex : false);
    };

  return (
    <motion.div style={{ opacity: spectrumOpacity }}>
      <Box
        ref={containerRef}
        sx={{
          backgroundColor: "black",
          color: "white",
          py: 10,
          px: { xs: 4, md: 2 },
        }}
      >
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
          {/* Left: Title */}
          <Box>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              Service Spectrum
            </Typography>
          </Box>

          {/* Right: Description */}
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

        {/* Accordion Panels */}
        <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
          {panels.map((panel, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                backgroundColor: "#111",
                color: "white",
                border: "1px solid grey",
                mb: 2,
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              >
                <Typography variant="h6">{panel.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="grey.300" sx={{ whiteSpace: "pre-line" }}>
                  {panel.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}
