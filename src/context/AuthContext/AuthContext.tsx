import React, { FC, useReducer } from "react";
import { Auth } from "authenticator/structures/Auth";
import authReducer from "./reducer";

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
