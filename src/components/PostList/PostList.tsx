import React from 'react';
import { PostType } from '../../types';
import Post from '../Post/Post';

interface IProp {
  data: PostType[];
}

function PostList({ data }: IProp) {
  return (
    <>
      {data.map(item => (
        <Post
          key={item.id}
          id={item.id}
          userId={item.userId}
          nickName={item.nickName}
          avatar={item.avatar}
          title={item.title}
          content={item.content}
          category={item.category}
          sub_category={item.sub_category}
          create_at={item.create_at}
          update_at={item.update_at}
          view_count={item.view_count}
          vote_count={item.vote_count}
          comment_count={item.comment_count}
        />
      ))}
    </>
  );
}

export default PostList;
