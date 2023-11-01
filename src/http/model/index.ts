export type ResponseType<T> = T;

export interface IError {
  [key: string]: string[];
}

export interface IErrors {
  errors: IError;
}
