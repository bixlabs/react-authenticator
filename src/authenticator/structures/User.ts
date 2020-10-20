import { Token } from "authenticator/structures/Token";

export class User {
  id?: string;
  email?: string;
  password?: string;
  givenName?: string;
  secondName?: string;
  familyName?: string;
  secondFamilyName?: string;
  token?: Token;

  constructor({
    id,
    email,
    password,
    givenName,
    secondName,
    familyName,
    secondFamilyName,
    token,
  }: UserConstructorArgument) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.givenName = givenName;
    this.secondName = secondName;
    this.familyName = familyName;
    this.secondFamilyName = secondFamilyName;
    this.token = token;
  }

  isAuthenticated(): boolean {
    const MS_TO_SECONDS_CONVERSION_FACTOR = 0.001;
    const getTimeValueInSeconds = (): number =>
      new Date().getTime() * MS_TO_SECONDS_CONVERSION_FACTOR;

    if (!this.token || !this.id) {
      return false;
    }

    if (this.token.expiresIn < getTimeValueInSeconds()) {
      return false;
    }

    return true;
  }
}

type UserConstructorArgument = {
  id?: string;
  email?: string;
  password?: string;
  givenName?: string;
  secondName?: string;
  familyName?: string;
  secondFamilyName?: string;
  token?: Token;
};
