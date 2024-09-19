import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const FnLogin = async () => {
  const { data } = await axios.post('http://127.0.0.1:3000/login');
  return data;
};

const FnSingUp = async () => {
  const { data } = await axios.post('http://127.0.0.1:3000/singup');
  return data;
};

export const useLogin = () => {
  return useQuery({
    queryKey: ['login'],
    queryFn: FnLogin,
  });
};

export const useSingUp = () => {
  return useQuery({
    queryKey: ['singup'],
    queryFn: FnSingUp,
  });
};
