import { UseQueryResult } from '@tanstack/react-query';

export type Query<T> = UseQueryResult<T, Error>;

export type GetShortInfo = {
  id: number;
  class: string;
  name: string;
  description: string;
  img: string;
};
