import axios from "axios";
import { User } from "authenticator/structures/User";
const { REACT_APP_AUTH_API } = process.env;

export const signUp = async (
  user: User,
  onSuccess: Function,
  onError: Function
) => {
  try {
    await axios.post(REACT_APP_AUTH_API + "user/signup", user, {
      headers: {
        //TODO: remove for preflight request to trigger
        "Content-Type": "text/plain",
      },
    });

    if (onSuccess) {
      login(user, onSuccess, onError);
    }
  } catch (error) {
    onError(error);
  }
};

export const login = async (
  user: User,
  onSuccess: Function,
  onError: Function
) => {
  try {
    const { data } = await axios.post(REACT_APP_AUTH_API + "user/login", user, {
      headers: {
        //TODO: remove for preflight request to trigger
        "Content-Type": "text/plain",
      },
    });

    if (onSuccess) {
      handleLoginSuccess(getUserFromLoginResponse(data.result), onSuccess);
    }
  } catch (error) {
    onError(error);
  }
};

const handleLoginSuccess = (user: User, callback: Function) => {
  localStorage.setItem("user", JSON.stringify(user));
  callback(user);
};

const getUserFromLoginResponse = ({
  user,
  exp,
  iat,
  jwt,
}: {
  exp: number;
  iat: number;
  jwt: string;
  user: User;
}): User => {
  return new User({
    ...user,
    token: { expiresIn: exp, token: jwt },
  });
};

export const logout = (callback: Function) => {
  localStorage.removeItem("user");
  if (callback) {
    callback();
  }
};
