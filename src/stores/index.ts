import create from 'zustand';
import axios from 'axios';
import { IUser } from '../types';

interface UserStore {
  user: IUser | null;
  loading: boolean;
  error: string | null;
  fetchUser: (userId: number) => Promise<void>;
  updateUser: (updatedProfile: Partial<IUser>) => Promise<void>;
}

const useUser = create<UserStore>(set => ({
  user: null,
  loading: false,
  error: null,
  fetchUser: async (user: number) => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get<IUser>(`http://localhost:5000/users`);
      set({ user: response.data, loading: false });
    } catch (error) {
      set({
        user: null,
        loading: false,
        error: 'Failed to fetch user profile.',
      });
    }
  },
  updateUser: async (updatedUser: Partial<IUser>) => {
    try {
      set({ loading: true, error: null });

      // 여기에서 실제 사용자 프로필 업데이트 로직을 수행합니다.
      // updatedProfile은 변경하려는 필드들의 부분집합입니다.
      const response = await axios.patch(
        `/api/users/${updatedUser.id}`,
        updatedUser,
      );

      set({ user: response.data, loading: false });
    } catch (error) {
      set({ loading: false, error: 'Failed to update user profile.' });
    }
  },
}));

export default useUser;
