import { User } from "authenticator/structures/User";

export default (): User => {
  const userString = localStorage.getItem("user");
  if (userString) {
    return new User(JSON.parse(userString));
  }

  return new User({});
};
