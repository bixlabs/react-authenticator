import React, { FC, useReducer } from "react";
import { InitialStateType } from './types';
import authReducer from './reducer';

const initialState: InitialStateType = {
  user: {},
};

export const AuthContext = React.createContext<{
  state: InitialStateType,
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
});

export const AuthProvider : FC = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};