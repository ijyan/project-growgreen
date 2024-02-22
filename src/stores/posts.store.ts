import { create } from 'zustand';
import axios from 'axios';
import { IPost } from '../types';

interface PostStore {
  originalPosts: IPost[];
  posts: IPost[];
  setPosts: (posts: IPost[]) => void;
  loading: boolean;
  error: string | null;
  fetchPosts: () => void;
  sortByDate: () => void; // 최신순
  sortByThumbsUp: () => void; // 공감순
  sortByViews: () => void; // 조회순
  sortByComments: () => void; // 조회순
  active: 'date' | 'thumbsUp' | 'views' | 'comments';
  // 검색
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const usePostStore = create<PostStore>(set => ({
  originalPosts: [],
  posts: [],
  setPosts: posts => set({ posts }),
  loading: true,
  error: null,
  active: 'date',
  fetchPosts: async () => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get<IPost[]>('http://localhost:5000/posts');
      const sortedPosts = response.data.sort(
        (a, b) =>
          new Date(b.create_at).getTime() - new Date(a.create_at).getTime(),
      );
      set({ posts: sortedPosts, loading: false, originalPosts: sortedPosts });
    } catch (error) {
      set({ posts: [], loading: false, error: 'Error fetching posts' });
    }
  },
  sortByDate: () => {
    // 최신순
    set(state => ({
      posts: [...state.posts].sort(
        (a, b) =>
          new Date(b.create_at).getTime() - new Date(a.create_at).getTime(),
      ),
      active: 'date',
    }));
  },
  sortByThumbsUp: () => {
    // 공감순
    set(state => ({
      posts: [...state.posts].sort((a, b) => b.vote_count - a.vote_count),
      active: 'thumbsUp',
    }));
  },
  sortByViews: () => {
    // 조회순
    set(state => ({
      posts: [...state.posts].sort((a, b) => b.view_count - a.view_count),
      active: 'views',
    }));
  },
  sortByComments: () => {
    // 댓글순
    set(state => ({
      posts: [...state.posts].sort((a, b) => b.comment_count - a.comment_count),
      active: 'comments',
    }));
  },
  // 검색
  searchTerm: '',
  setSearchTerm: (term: string) => set({ searchTerm: term }),
}));

export default usePostStore;
