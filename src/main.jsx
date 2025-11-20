import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routers/router.jsx";
import AuthProvide from "./contexts/AuthProvide.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvide>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvide>
  </StrictMode>
);
