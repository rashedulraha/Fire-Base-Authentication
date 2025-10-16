import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AboutUs from "../Pages/About";
import Homepage from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";

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
        path: "profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "register",
    Component: Register,
  },
]);

export default router;
