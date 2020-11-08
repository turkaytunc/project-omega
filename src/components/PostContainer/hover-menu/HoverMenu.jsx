import React, { useState, useEffect } from 'react';
import { Details } from './details/Details';
import './hover-menu.scss';
import { Remove } from './remove/Remove';

export const HoverMenu = ({ post, handleRemove }) => {
  return (
    <div className="hover-menu-container">
      <ul>
        <li>{post.id}</li>
        <Details post={post} />
        <li>Edit</li>
        <Remove postId={post.id} />
      </ul>
    </div>
  );
};
