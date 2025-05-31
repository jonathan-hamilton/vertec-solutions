import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Profile from "./pages/Profile";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Proposal from "./pages/Proposal";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Navigate to="/" replace />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proposal/:slug" element={<Proposal />} />
        </Route>
      </Routes>
    </Router>
  );
}
