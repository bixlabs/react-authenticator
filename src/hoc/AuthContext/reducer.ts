import actions from './actions';
import { UserType } from './types';

const authReducer = (state: { user: UserType }, action: any) => {
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