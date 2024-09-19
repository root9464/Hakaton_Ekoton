import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../config/axios';
import { GetShortInfo } from '../types/getInfo';
import { Mutation } from '../types/query';

const FnGetShortInfo = async (shorts?: true, id?: number, animalClass?: string): Promise<GetShortInfo[]> => {
  const { data } = await axiosInstance.get<GetShortInfo[]>(`get-organism?shorts=${shorts}&id=${id}&class=${animalClass}`);
  return data;
};

export const useGetShortInfo = (): Mutation<GetShortInfo[]> => {
  return useMutation({
    mutationKey: ['full animal info'],
    mutationFn: (shorts?: true, id?: number, animalClass?: string) => FnGetShortInfo(shorts, id, animalClass),
  });
};
