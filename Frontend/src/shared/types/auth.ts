import { UseMutateFunction } from '@tanstack/react-query';

type DataUserSignUp = {
  firstname: string;
  lastname: string;
  login: string;
  password: string;
};

type DataUserSingUpRes = {
  firstname: string;
  lastname: string;
  login: string;
  password: string;
  role: string;
};

type Mutate<T> = UseMutateFunction<T, Error, T, unknown>;

export type { DataUserSignUp, DataUserSingUpRes, Mutate };
