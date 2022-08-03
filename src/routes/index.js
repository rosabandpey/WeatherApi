import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
