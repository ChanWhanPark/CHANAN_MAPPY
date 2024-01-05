import { createBrowserRouter } from "react-router-dom";

import MainPage from "./views/main";
import MapViewer from "./views/Map";
import Service from "./views/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
  },
  {
    path: "/route",
    element: <MapViewer/>
  },
  {
    path: "/service",
    element: <Service/>
  }
]);

