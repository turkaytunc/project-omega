import React, { useContext, useEffect, useState } from 'react';
import './child-user.scss';
import { GlobalState } from '../../../context/GlobalContext';

export const ChildUser = ({ parentId, userName }) => {
  const [isActive, setIsActive] = useState(false);
  const { state, updateState } = useContext(GlobalState);

  return (
    <div
      className="child-user-container"
      id={parentId}
      onClick={() => updateState(parentId)}
    >
      {userName}
    </div>
  );
};
