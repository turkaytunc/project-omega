import React, { useContext, useEffect } from 'react';
import './child-user.scss';
import { GlobalState } from '../../../context/GlobalContext';

export const ChildUser = ({ parentId, userName }) => {
  const { updateState } = useContext(GlobalState);

  useEffect(() => {
    updateState(1);
    updateState(2);
    updateState(3);
    updateState(4);
  }, []);

  return (
    <button
      className="child-user-container"
      id={parentId}
      onClick={() => updateState(parentId)}
    >
      {userName}
    </button>
  );
};
