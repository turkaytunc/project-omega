import { HoverMenu } from '../hover-menu/HoverMenu';
import { useState, useEffect } from 'react';
import './single-post.scss';

export const SinglePost = ({ post }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <ul
      id={post.id}
      className="post-ul"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <li className="single-post-title">{post.title}</li>
      <li className="single-post-body">{post.body}</li>
      {isMouseOver ? <HoverMenu post={post} /> : null}
    </ul>
  );
};
