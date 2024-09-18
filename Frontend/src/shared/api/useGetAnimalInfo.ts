import { shortInfo } from '@lib/constants/api.const';
import { useQuery } from '@tanstack/react-query';
import { GetShortInfo, Query } from '../types/getInfo';

export const useGetFullInfo = (): Query<GetShortInfo[]> => {
  return useQuery({
    queryKey: ['full animal info'],
    queryFn: () => {
      return new Promise<GetShortInfo[]>((resolve) => {
        setTimeout(() => {
          resolve(shortInfo);
        }, 1000);
      });
    },
  });
};
