import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/About/AboutUs";
import Error from "../Pages/Error/Error";
import Map from "../components/Map";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Service from "../Pages/Service/Service";
import PrivateRouter from "./PrivateRouter";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import Loading from "../components/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "aboutUs",
        Component: AboutUs,
      },
      {
        path: "rider",
        element: (
          <PrivateRouter>
            <Rider></Rider>
          </PrivateRouter>
        ),
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRouter>
            <SendParcel></SendParcel>
          </PrivateRouter>
        ),
        loader: () => fetch("serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "*",
        Component: Error,
      },
      {
        path: "map",
        Component: Map,
      },
      {
        path: "service",
        Component: Service,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
