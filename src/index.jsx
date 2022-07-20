import { App } from "./App";
import { BrowserRouter, Switch, Link, Router, Route } from "react-router-dom";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Router>
      <Routes></Routes>
    </Router>
  </BrowserRouter>
);
