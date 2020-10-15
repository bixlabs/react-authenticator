import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AuthContext } from "../hoc/AuthContext/AuthContext";
import WithAuthenticationLayout from "../hoc/WithAuthLayout";
import loggedRoutes from "./logged";
import unloggedRoutes from "./unlogged";

const RouterComponent = () => {
  const { state } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        {
          !state.user || !state.user.email ? unloggedRoutes.map(
            unloggedRoute => <Route>
              {WithAuthenticationLayout(unloggedRoute.component)}
            </Route>
          ) : loggedRoutes.map(
            loggedRoute => <Route>
              <loggedRoute.component />
            </Route>
          )
        }
      </Switch>
    </Router>
  )
}

export default RouterComponent;