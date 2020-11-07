import { HoverMenu } from '../hover-menu/HoverMenu';
import { useState } from 'react';

export const SinglePost = ({ post }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <ul
      id={post.id}
      className="post-ul"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <li>{post.title}</li>
      <li>{post.body}</li>
      {isMouseOver ? <HoverMenu postId={post.id} /> : null}
    </ul>
  );
};
