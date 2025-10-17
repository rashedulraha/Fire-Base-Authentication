import "./index.css";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router/dom";
import router from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import { StrictMode } from "react";
import AuthProvider from "./AuthContext/AuthProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
