import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import FooterSection from "./FooterSection";
import HeaderSection from "./HeaderSection";

export default function Layout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <HeaderSection />
      <Box sx={{ mt: 4, flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Box component="footer" mt="auto">
        <FooterSection />
      </Box>
    </Box>
  );
}
