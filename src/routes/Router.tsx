import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "context/AuthContext/AuthContext";
import WithAuthenticationLayout from "components/hoc/WithAuthLayout";
import loggedRoutes from "./logged";
import unloggedRoutes from "./unlogged";

const RouterComponent = () => {
  const { state } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        {!state.user || !state.user.email
          ? unloggedRoutes.map((unloggedRoute, index) => (
              <Route path={unloggedRoute.path} key={index}>
                <Suspense fallback={<div>Loading...</div>}>
                  {WithAuthenticationLayout(unloggedRoute.component)}
                </Suspense>
              </Route>
            ))
          : loggedRoutes.map((loggedRoute, index) => (
              <Route path={loggedRoute.path} key={index}>
                <Suspense fallback={<div>Loading...</div>}>
                  <loggedRoute.component />
                </Suspense>
              </Route>
            ))}
      </Switch>
    </Router>
  );
};

export default RouterComponent;
