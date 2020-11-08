import './details.scss';

import React from 'react';

export const Details = ({ post }) => {
  const handleClick = () => {
    console.log(`Clicked details, id: ${post.id}`);
  };
  return <li onClick={(e) => handleClick(e)}>Details</li>;
};
