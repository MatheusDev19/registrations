import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { SideDrawer } from "./shared/components/navbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SideDrawer />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
