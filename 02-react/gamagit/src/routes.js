import React from "react";
import {BrowserRouter,
  Routes, // instead of "Switch"
  Route,} from "react-router-dom";

import Repositories from "./Repositories";
import Home from "./Home";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}
