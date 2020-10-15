export type UserType = {
  email?: string;
  password?: string;
  token?: string;
}

export type InitialStateType = {
  user: UserType;
}

export type AuthActionsType = {
  type: string;
  payload: any;
}