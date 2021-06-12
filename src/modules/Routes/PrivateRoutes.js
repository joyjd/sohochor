import React from "react";
import { Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./../../pages/Home"));
const About = React.lazy(() => import("./../../pages/About"));
const Activities = React.lazy(() => import("./../../pages/Activities"));
const Reunion = React.lazy(() => import("./../../pages/Reunion"));
const Gallery = React.lazy(() => import("./../../pages/Gallery"));
const Archives = React.lazy(() => import("./../../pages/Archives"));
const ActivityDetails = React.lazy(() => import("./../../pages/ActivityDetails"));
const ReunionDetails = React.lazy(() => import("./../../pages/ReunionDetails"));
const Donation = React.lazy(() => import("./../../pages/Donation"));
const Blog = React.lazy(() => import("./../../pages/Blog"));
const routeObj = [
  {
    path: "/About",
    Component: About,
  },
  {
    path: "/Activities",
    Component: Activities,
  },
  {
    path: "/Activities/ActivityDetails/:id",
    Component: ActivityDetails,
  },
  {
    path: "/Reunions",
    Component: Reunion,
  },
  {
    path: "/Reunions/ReunionDetails/:id",
    Component: ReunionDetails,
  },
  {
    path: "/Gallery",
    Component: Gallery,
  },
  {
    path: "/Archives",
    Component: Archives,
  },
  {
    path: "/Donation",
    Component: Donation,
  },
  {
    path: "/Blog",
    Component: Blog,
  },
  {
    path: "/",
    Component: Home,
  },
];

const PrivateRoutes = () => {
  console.log("routes loaded");
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Switch>
        {routeObj.map((rtObj, index) => {
          const { path, Component } = rtObj;
          return <Route key={index} path={path} exact render={() => <Component />} />;
        })}
      </Switch>
    </React.Suspense>
  );
};

export default PrivateRoutes;
