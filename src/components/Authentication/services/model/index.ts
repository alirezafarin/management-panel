export interface IRegisterBody {
  user: { email: string; password: string; username: string };
}

export interface ILoginBody {
  user: { email: string; password: string };
}

export interface IUser {
  email: string;
  username: string;
  bio: null;
  image: string;
  token: string;
}

export interface IRegisterResponse {
  user: IUser;
}
