import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routers/router.jsx";
import AuthProvide from "./contexts/AuthProvide.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvide>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvide>
    </QueryClientProvider>
  </StrictMode>
);
