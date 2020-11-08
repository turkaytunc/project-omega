import React, { useContext } from 'react';
import { RemovePostContext } from '../../../../context/RemovePostContext';

export const Remove = ({ postId }) => {
  const { updateRemovePostContext } = useContext(RemovePostContext);

  const confirmFunc = () => {
    if (window.confirm('Are you sure?')) {
      updateRemovePostContext((prev) => [...prev, postId]);
    }
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={() => confirmFunc()}>
      Remove
    </div>
  );
};
