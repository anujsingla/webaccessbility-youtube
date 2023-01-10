import { Routes, Route } from "react-router-dom";
import { ARIA } from "./ARIA";
import { Home } from "./Home";
import { HtmlForm } from "./HtmlForm";
import { Operable } from "./Operable";
import { Perceivable } from "./Perceivable";
import { Robust } from "./Robust";
import { Understandable } from "./Understandable";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="perceivable" element={<Perceivable />} />
      <Route path="operable" element={<Operable />} />
      <Route path="understandable" element={<Understandable />} />
      <Route path="robust" element={<Robust />} />
      <Route path="aria" element={<ARIA />} />
      <Route path="htmlForm" element={<HtmlForm />} />
    </Routes>
  );
}

export default AppRoutes;
