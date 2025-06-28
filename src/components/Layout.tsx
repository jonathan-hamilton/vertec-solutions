import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box sx={{ mt: 4, flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Box component="footer" mt="auto">
        <Footer />
      </Box>
    </Box>
  );
}
