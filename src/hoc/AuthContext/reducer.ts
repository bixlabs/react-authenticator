import actions from "./actions";
import { User } from "./types";

const authReducer = (state: { user: User }, action: any) => {
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
