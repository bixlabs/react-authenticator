import React from "react";

export default [
  {
    path: "/sign-up",
    component: React.lazy(() => import("components/screens/Signup/Signup")),
    exact: true,
  },
  {
    path: "/",
    component: React.lazy(() => import("components/screens/Login/Login")),
    exact: true,
  },
];
