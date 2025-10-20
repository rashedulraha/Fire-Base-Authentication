import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AboutUs from "../Pages/About";
import Homepage from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import Orders from "../Orders/Orders";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import Dashboard from "../Components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: (
      <span className="loading loading-bars loading-xl"></span>
    ),
    children: [
      {
        index: true,
        Component: Homepage,
      },
      { path: "about-us", Component: AboutUs },
      {
        path: "dashboard",
        element: (
          <PrivetRoutes>
            <Dashboard />
          </PrivetRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoutes>
            <Profile />
          </PrivetRoutes>
        ),
      },
      {
        path: "orders",
        element: (
          <PrivetRoutes>
            <Orders />
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "registration",
    Component: Register,
  },
]);

export default router;
