import { lazy } from "react";
// const DemoPage = lazy(() => import("../pages/Demo/DemoPage"));
const HomePage = lazy(() => import("../pages/Home/Home"));
const Labs = lazy(() => import("../pages/Labs/Labs"));
const routes = [
    {
        path: "/",
        component: HomePage,
      },
      {
        path: "/home",
        component: HomePage,
      },
      {
        path: "/labs",
        component: Labs,
      },
];
export default routes;