import { User } from "authenticator/structures/User";

export default (): User | null => {
  const userString = localStorage.getItem("user");
  if (userString) {
    return JSON.parse(userString);
  }

  return null;
};
