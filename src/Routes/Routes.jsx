import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AboutUs from "../Pages/About";

import Homepage from "../Pages/Home";
import Signup from "../Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      { path: "about-us", Component: AboutUs },

      {
        path: "signup",
        Component: Signup,
      },
    ],
  },
]);

export default router;
