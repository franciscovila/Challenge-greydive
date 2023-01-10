import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lista from "./lista";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="bg-sky-100  ">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="lista" element={<Lista />} />
      </Routes>
    </BrowserRouter>
  </div>
);
