import { Auth } from "authenticator/structures/Auth";
import actions from "./actions";

const authReducer = (state: Auth, action: any) => {
  console.log(`Auth Reducer => ${action.type}`, action);
  switch (action.type) {
    case actions.AUTH_STATE_CHANGED:
      return {
        user: action.payload,
      };
  }
  return state;
};

export default authReducer;
