import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Busca } from "../pages/Busca";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busca/:cep" element={<Busca />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
