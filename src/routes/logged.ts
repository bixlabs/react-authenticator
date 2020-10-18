import React from "react";

export default [
  {
    path: "/",
    component: React.lazy(() => import("../screens/Home/Home")),
  },
];
