import React from "react";
import { Routes, Route } from "react-router-dom";
import Expenses from "../pages/Expenses/Expenses";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    );
  };

export default AppRoutes;

