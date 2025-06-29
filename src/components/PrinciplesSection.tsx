import { Box, Typography, useTheme } from "@mui/material";
import { principles } from "../styles/constants";
import React, { useRef } from "react";
import PrincipleTooltip from "./PrincipleTooltip";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PrinciplesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.6, 1],
    [0.8, 1, 1, 0.8]
  );
  const radius = 200;
  const centerSize = 150;
  const theme = useTheme();

  return (
    <motion.div ref={ref} style={{ opacity, scale }}>
      <Box sx={theme.custom.principlesSectionOuterBoxSx}>
        {/* Central Title */}
        <Box
          sx={{
            width: centerSize,
            height: centerSize,
            ...theme.custom.principlesSectionCentralTitleBoxSx,
            background: theme.custom.principleCircle,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Principles
          </Typography>
        </Box>

        {/* Circular Items with Icons */}
        {principles.map((p, i) => {
          const angle = (360 / principles.length) * i;
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <PrincipleTooltip
              key={i}
              title={p.title}
              description={p.description}
              placement="top"
            >
              <Box
                sx={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  ...theme.custom.principlesSectionToolTipBoxBoxSx,
                }}
              >
                {React.cloneElement(p.icon, { fontSize: "inherit" })}
              </Box>
            </PrincipleTooltip>
          );
        })}
      </Box>
    </motion.div>
  );
}
