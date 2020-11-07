import './post.scss';

import React, { useState, useRef, useEffect } from 'react';

export const Post = ({ post }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="post-container">
      <li>{post.id}</li>
      <li>{post.title}</li>
      <li>{post.body}</li>
    </div>
  );
};
