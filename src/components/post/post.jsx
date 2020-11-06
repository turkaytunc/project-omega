import './post.scss';

import React, { useState, useRef } from 'react';

export const Post = ({ n }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const ulElement = useRef();

  const renderHoverMenu = () => {
    return (
      <div className="hover-menu">
        <div>DETAIL</div>
        <div>EDIT</div>
        <div>REMOVE</div>
      </div>
    );
  };

  const handleHover = (e, setType) => {
    console.log(e.target.parentElement);

    setIsMouseOver(setType);
  };

  return (
    <div className="post-container">
      {n.map((e) => (
        <ul
          id={e.id}
          ref={ulElement}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          className="post-ul"
        >
          <li>id: {e.id}</li>
          <li>title: {e.title}</li>
          <li>body: {e.body}</li>
          {isMouseOver ? renderHoverMenu() : null}
        </ul>
      ))}
    </div>
  );
};
