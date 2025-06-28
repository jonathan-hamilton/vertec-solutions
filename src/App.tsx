import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Proposal from "./pages/Proposal";
import Layout from "./components/Layout";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Navigate to="/" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/proposal/:slug" element={<Proposal />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
