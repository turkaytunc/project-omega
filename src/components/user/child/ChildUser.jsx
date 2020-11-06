import React, { useContext, useEffect, useState } from 'react';
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
  };

  useEffect(() => {
    if (isChildContainerOpen) {
      updateState({
        ...state,
        activeUserIds: [...new Set([...state.activeUserIds, userId])],
      });
    } else {
      const filteredActiveUserIds = state.activeUserIds.filter(
        (e) => e !== userId
      );
      updateState({ ...state, activeUserIds: [...filteredActiveUserIds] });
    }
  }, [isChildContainerOpen]);

  return (
    <div>
      <div onClick={() => handleClick()}>
        id: {userId}, name: {userName}
      </div>

      {isChildContainerOpen ? renderChildren() : null}
    </div>
  );
};
