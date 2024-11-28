import React from "react";
import { Routes, Route } from "react-router-dom";
import Expenses from "../pages/Expenses/Expenses";
import Home from "../pages/Home/Home";
import Edit from "../pages/Edit/Edit";
import Delete from "../pages/Edit/Delete";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    );
  };

export default AppRoutes;

