import './post.scss';
import { HoverMenu } from '../hover-menu/HoverMenu';

import React, { useState } from 'react';

export const Post = ({ post }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      className="post-container"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <ul id={post.id} className="post-ul">
        <li>{post.title}</li>
        <li>{post.body}</li>
        {isMouseOver ? <HoverMenu /> : null}
      </ul>
    </div>
  );
};
