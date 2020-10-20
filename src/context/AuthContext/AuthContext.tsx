import React, { FC, useEffect, useReducer } from "react";
import { Auth } from "authenticator/structures/Auth";
import authReducer from "./reducer";
import actions from "./actions";
import getUserFromLocalStorage from "utils/getUserFromLocalStorage";

const initialState: Auth = {};

export const AuthContext = React.createContext<{
  state: Auth;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    restoreSessionFromLocalStorage();
  }, []);

  const restoreSessionFromLocalStorage = () => {
    const user = getUserFromLocalStorage();
    if (user) {
      dispatch({
        type: actions.AUTH_STATE_CHANGED,
        payload: user,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
