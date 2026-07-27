import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import LandingPage from "./components/LandingPage";
import "./globals.css";

hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <LandingPage />
  </StrictMode>,
);
