import React from "react";

export default [
  {
    path: "/",
    component: React.lazy(() => import("components/screens/Home/Home")),
  },
];
