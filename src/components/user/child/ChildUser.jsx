import React, { useState } from 'react';
import './child-user.scss';
import { findLocalParentById } from '../../../local-data/findLocalParentById';

export const ChildUser = ({ userId, userName }) => {
  const [hasChild, setHasChild] = useState(false);

  const renderChildren = () =>
    findLocalParentById(userId).map((e) => (
      <div key={e.id} className="child-container">
        id: {e.id}, name: {e.name}
      </div>
    ));

  const handleClick = () => {
    setHasChild((prev) => !prev);
  };

  return (
    <div>
      <div onClick={() => handleClick()}>
        id: {userId}, name: {userName}
      </div>

      {hasChild ? renderChildren() : null}
    </div>
  );
};
