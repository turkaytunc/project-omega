import React, { useContext, useEffect } from 'react';
import './child-user.scss';
import { GlobalState } from '../../../context/GlobalContext';

export const ChildUser = ({ parentId, userName }) => {
  const { updateState } = useContext(GlobalState);

  //Initial api call
  useEffect(() => {
    updateState(parentId);
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
