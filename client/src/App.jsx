import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
};

export default App;



