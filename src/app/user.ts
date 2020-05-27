export interface RegistrationUser {
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface LoginUser {
  username: string;
  password: string;
}

export interface UserBasicData {
  id: number;
  username: string;
}
