import axios from "axios";
import { User } from "../hoc/AuthContext/types";
const { REACT_APP_AUTH_API: authenticatorBaseEndpoint } = process.env;

export const signUp = async (
  user: User,
  onSuccess: Function,
  onError: Function
) => {
  try {
    const response = await axios.get(
      authenticatorBaseEndpoint + "healthcheck" || ""
    );

    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError(error);
  }
};

export const login = async (user: User, callback: Function) => {
  const response = await axios.get(
    authenticatorBaseEndpoint + "healthcheck" || ""
  );

  if (callback) {
    callback(response);
  }
};
