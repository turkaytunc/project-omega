import './post.scss';

import React, { useState } from 'react';

export const Post = ({ n }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const renderHoverMenu = () => {
    return (
      <div className="hover-menu">
        <div>detail</div>
        <div>edit</div>
        <div>remove</div>
      </div>
    );
  };

  return (
    <div
      className="post-container"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div>This is post number {n}</div>
      {isMouseOver ? renderHoverMenu() : null}
    </div>
  );
};
