import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useUserStore from '../../stores/user.store';

export default function MyPage() {
  const { user } = useUserStore();
  return user ? <Outlet /> : <Navigate to="/login" />;
}
