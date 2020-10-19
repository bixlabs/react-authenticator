import axios from "axios";
import { User } from "authenticator/structures/User";
const { REACT_APP_AUTH_API_URL } = process.env;

export const signUp = async (
  user: User,
  onSuccess: Function,
  onError: Function
) => {
  try {
    const response = await axios.get(
      REACT_APP_AUTH_API_URL + "healthcheck" || ""
    );

    if (onSuccess) {
      onSuccess(response);
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
    const response = await axios.get(
      REACT_APP_AUTH_API_URL + "healthcheck" || ""
    );

    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError(error);
  }
};
