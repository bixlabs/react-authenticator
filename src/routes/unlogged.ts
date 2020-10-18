import React from "react";

export default [
  {
    path: "/sign-up",
    component: React.lazy(() => import("../screens/Signup/Signup")),
    exact: true,
  },
  {
    path: "/",
    component: React.lazy(() => import("../screens/Login/Login")),
    exact: true,
  },
];
