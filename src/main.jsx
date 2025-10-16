import "./index.css";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router/dom";
import router from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import { StrictMode } from "react";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
