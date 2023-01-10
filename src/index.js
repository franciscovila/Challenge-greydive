import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Formulario from "./formulario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lista from "./lista";
import SubmitSuccess from "./submitSuccess";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="bg-sky-100  ">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="lista" element={<Lista />} />
        <Route path="submitSuccess" element={<SubmitSuccess />} />
      </Routes>
    </BrowserRouter>
  </div>
);
