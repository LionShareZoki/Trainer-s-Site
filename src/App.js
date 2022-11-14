import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = (props) => {
  return (
    <>
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </>
  );
};

export default App;
