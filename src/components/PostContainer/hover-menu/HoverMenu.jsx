import React from 'react';
import { Details } from './details/Details';
import './hover-menu.scss';
import { Remove } from './remove/Remove';
import { Edit } from './edit/Edit';

export const HoverMenu = ({ post, handleRemove }) => {
  return (
    <div className="hover-menu-container">
      <ul>
        <li>{post.id}</li>
        <Details post={post} />
        <Edit />
        <Remove postId={post.id} />
      </ul>
    </div>
  );
};
