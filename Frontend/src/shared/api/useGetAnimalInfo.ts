import { useMutation, UseMutationResult, useQuery } from '@tanstack/react-query';
import axiosInstance from '../config/axios';
import { GetShortInfo } from '../types/getInfo';
import { Query } from '../types/query';

type Params = {
  shorts: boolean;
  id: number;
  animalClass: string;
};

const FnGetShortInfo = async ({ shorts, id, animalClass }: Partial<Params>): Promise<GetShortInfo[]> => {
  const params: Record<string, string | number | boolean> = {};
  if (shorts !== undefined) params.shorts = shorts.toString();
  if (id !== undefined) params.id = id.toString();
  if (animalClass !== undefined) params.class = animalClass;

  const { data } = await axiosInstance.get<GetShortInfo[]>(`get-organism`, { params });
  return data;
};

const FnGetShortInfoQ = async (): Promise<GetShortInfo[]> => {
  const { data } = await axiosInstance.get<GetShortInfo[]>('get-organism?shorts=true');
  return data;
};

export const useGetShortInfo = (): UseMutationResult<GetShortInfo[], Error, Partial<Params>, unknown> => {
  return useMutation({
    mutationKey: ['full animal info'],
    mutationFn: ({ shorts, id, animalClass }) => FnGetShortInfo({ shorts, id, animalClass }),
  });
};

export const useGetShortInfoQ = (): Query<GetShortInfo[]> => {
  return useQuery({
    queryKey: ['full animal short info'],
    queryFn: FnGetShortInfoQ,
  });
};
