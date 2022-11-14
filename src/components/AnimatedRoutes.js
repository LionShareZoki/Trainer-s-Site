import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../components/pages/Home";
import Kontakt from "../components/pages/Kontakt";
import OnlineTrening from "../components/pages/OnlineTrening";
import PrivatniTrening from "../components/pages/PrivatniTrening";
import RegistrirajSe from "../components/pages/RegistrirajSe";
import OMeni from "../components/pages/OMeni";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/online/trening" element={<OnlineTrening />} />
        <Route path="/privatni/trening" element={<PrivatniTrening />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/registriraj/se" element={<RegistrirajSe />} />
        <Route path="/omeni" element={<OMeni />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
