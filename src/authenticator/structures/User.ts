import { Token } from "authenticator/structures/Token";

export type User = {
  id?: string;
  email: string;
  password?: string;
  givenName?: string;
  secondName?: string;
  familyName?: string;
  secondFamilyName?: string;
  token?: Token;
};
