// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { AppLayout } from "./components/Principles/Perceivable/AppLayout";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/Principles/Perceivable/AppRoutes";

function App() {
  return (
    <Router>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </Router>
  );
}

export default App;
