import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollMenu from "./ScrollMenu";

export default function Layout() {
  return (
    <Box>
      <Header />
      <ScrollMenu />
      <Box sx={{ mt: 4 }}>
        <Outlet />
      </Box>
      <Box component="footer" mt="auto">
        <Footer />
      </Box>
    </Box>
  );
}
