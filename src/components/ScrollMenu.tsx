import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  IconButton,
  Box,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollMenu() {
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowMenuIcon(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigate = (section: string) => {
    setOpen(false); // close drawer
    if (location.pathname === "/") {
      scrollToSection(section);
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showMenuIcon && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 26,
              right: 26,
              zIndex: 1300,
            }}
          >
            <IconButton
              onClick={() => setOpen(true)}
              sx={theme.custom.scrollMenuIconSx}
            >
              <MenuIcon />
            </IconButton>
          </motion.div>
        )}
      </AnimatePresence>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <ListItemButton
              onClick={() => {
                setOpen(false);
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  navigate("/");
                }
              }}
            >
              <ListItemText primary="Profile" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNavigate("services")}>
              <ListItemText primary="Services" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNavigate("principles")}>
              <ListItemText primary="Principles" />
            </ListItemButton>
            <ListItemButton onClick={() => handleNavigate("work")}>
              <ListItemText primary="Work" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                setOpen(false);
                navigate("/contact");
              }}
            >
              <ListItemText primary="Contact" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
