import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";
import MotorbikeRules from "./pages/Rules/MotorBikeRules";
import CarRules from "./pages/Rules/CarRules";
import CarUU from "./pages/UU/CarUU";
import MotorbikeUU from "./pages/UU/MotorbikeUU";

const AppContent = () => {
  // const location = useLocation();
  // const hideNavbar = location.pathname === "/login";

  return (
    <>
      {/* {!hideNavbar && <Navbar />} */}
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/motorbikeRules" element={<MotorbikeRules />} />
        <Route path="/carRules" element={<CarRules />} />
        <Route path="/carUU" element={<CarUU />} />
        <Route path="/MotorbikeUU" element={<MotorbikeUU />} />
      </Routes>
      {/* {!hideNavbar && <Footer />} */}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
