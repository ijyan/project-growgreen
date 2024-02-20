import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useStore from '../../stores/user.store';

export default function MyPage() {
  const { user } = useStore();
  return user ? <Outlet /> : <Navigate to="/login" />;
}
