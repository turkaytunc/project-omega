import React from 'react';
import './hover-menu.scss';

export const HoverMenu = ({ postId }) => {
  return (
    <div className="hover-menu-container">
      <ul>
        <li>{postId}</li>
        <li>Details</li>
        <li>Edit</li>
        <li>Remove</li>
      </ul>
    </div>
  );
};
