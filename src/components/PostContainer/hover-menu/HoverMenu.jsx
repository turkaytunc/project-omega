import React from 'react';
import { Details } from '../details/Details';
import './hover-menu.scss';

export const HoverMenu = ({ post }) => {
  return (
    <div className="hover-menu-container">
      <ul>
        <li>{post.id}</li>
        <Details post={post} />
        <li>Edit</li>
        <li>Remove</li>
      </ul>
    </div>
  );
};
