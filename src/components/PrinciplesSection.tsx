import { Box, Typography } from "@mui/material";
import { principles } from "../styles/constants";
import React, { useRef } from "react";
import PrincipleTooltip from "./PrincipleTooltip";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PrinciplesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // fade in as section enters, fade out as it leaves
  });
  const principlesOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1, 0]
  );
  const radius = 200;
  const centerSize = 150;

  return (
    <motion.div ref={sectionRef} style={{ opacity: principlesOpacity }}>
      <Box
        sx={{
          position: "relative",
          width: 500,
          height: 500,
          mx: "auto",
          my: 10,
        }}
      >
        {/* Central Title */}
        <Box
          sx={{
            width: centerSize,
            height: centerSize,
            borderRadius: "50%",
            background: "#eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            textAlign: "center",
            p: 4,
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
                  position: "absolute",
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                  background: "black",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "clamp(60px, 12vw, 90px)",
                  height: "clamp(60px, 12vw, 90px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "clamp(24px, 3vw, 40px)",
                  cursor: "pointer",
                  zIndex: 1,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translate(-50%, -50%) scale(1.1)",
                  },
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
