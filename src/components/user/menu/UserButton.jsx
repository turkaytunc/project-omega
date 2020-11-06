import React from 'react';
import { findLocalParentById } from '../../../local-data/findLocalParentById';

export const UserButton = ({ userId, userName }) => {
  const getChildren = () =>
    findLocalParentById(userId).map((e) => console.log(e.name));
  return (
    <button onClick={() => getChildren()}>
      id: {userId}, name: {userName}
    </button>
  );
};
