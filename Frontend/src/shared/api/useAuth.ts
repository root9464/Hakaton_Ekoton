import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { DataUserSignUp, DataUserSingUpRes } from '../types/auth';

const FnLogin = async () => {
  const { data } = await axios.post('http://127.0.0.1:3000/login');
  return data;
};

const FnSingUp = async (obj: DataUserSignUp): Promise<DataUserSingUpRes> => {
  const { data } = await axios.post<DataUserSingUpRes>('http://127.0.0.1:3000/singup', obj);
  return data;
};

export const useLogin = () => {
  return useQuery({
    queryKey: ['login'],
    queryFn: FnLogin,
  });
};

export const useSingUp = () => {
  return useMutation({
    mutationKey: ['singUp'],
    mutationFn: (obj: DataUserSignUp) => FnSingUp(obj),
  });
};
