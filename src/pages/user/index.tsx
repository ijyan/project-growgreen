import React from 'react';
import { useParams } from 'react-router-dom';

//! user

// export type UserData = {
//   userName: string;
//   email: string;
//   userId: string;
//   password: string;
//   nickName: string;
// };

export default function Index() {
  // useParams
  const { userId } = useParams();

  return <div>User Id: {userId};</div>;
}
