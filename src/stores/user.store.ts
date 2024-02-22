import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '../types';

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  updateUser: (
    id: number,
    updates: Partial<Pick<User, 'name' | 'email'>>,
  ) => void;
  removeUser: (id: number) => void;
}

export const useStore = create(
  persist<UserState>(
    set => ({
      user: null,
      setUser: (user: User) => set(() => ({ user })),
      updateUser: (id, updates) =>
        set(state => {
          if (state.user?.id === id) {
            return { ...state, user: { ...state.user, ...updates } };
          }
          return state;
        }),
      removeUser: () => set(() => ({ user: null })),
    }),
    {
      name: 'userStorage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional)이기 때문에 해당 줄을 적지 않으면 'localStorage'가 기본 저장소로 사용된다.
    },
  ),
);

export default useStore;
