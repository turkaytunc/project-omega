import React, { useContext, useState } from 'react';
import './child-user.scss';
import { findLocalParentById } from '../../../local-data/findLocalParentById';
import { UserContext } from '../../../context/UserContext';

export const ChildUser = ({ userId, userName }) => {
  const [isChildContainerOpen, setIsChildContainerOpen] = useState(false);
  const { state, updateState } = useContext(UserContext);

  const renderChildren = () =>
    findLocalParentById(userId).map((e) => (
      <div key={e.id} className="child-container">
        id: {e.id}, name: {e.name}
      </div>
    ));

  const handleClick = () => {
    setIsChildContainerOpen((prev) => !prev);

    const newIds = [...new Set([...state.userIds, userId])];

    updateState({
      ...state,
      userIds: [...newIds],
    });
  };

  return (
    <div>
      <div onClick={() => handleClick()}>
        id: {userId}, name: {userName}
      </div>

      {isChildContainerOpen ? renderChildren() : null}
    </div>
  );
};
