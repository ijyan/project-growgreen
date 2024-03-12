import { create } from 'zustand';
import axios from 'axios';
import { IComment } from '../types';

interface CommentStore {
  comments: IComment[];
  setComment: (comment: IComment) => void;
  loading: boolean;
  error: string | null;
  fetchComments: () => void;
}

const useCommentStore = create<CommentStore>(set => ({
  comments: [],
  setComment: comment =>
    set(state => ({ comments: [...state.comments, comment] })),
  loading: true,
  error: null,
  fetchComments: async () => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get<IComment[]>(
        'http://localhost:5000/comments',
      );
      set({ comments: response.data });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  },
}));

export default useCommentStore;
