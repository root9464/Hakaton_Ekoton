import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { DataUserSingUpRes } from '../types/auth';

interface Auth {
  user: DataUserSingUpRes;
  setUserSrote: (user: DataUserSingUpRes) => void;
}

export const useAuthStore = create(
  persist<Auth>(
    (set) => ({
      user: {
        firstname: '',
        lastname: '',
        login: '',
        password: '',
        role: '',
      },
      setUserSrote: (user) => set({ user }),
    }),
    {
      name: 'food-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
