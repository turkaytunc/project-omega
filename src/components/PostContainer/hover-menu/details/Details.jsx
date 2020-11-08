import './details.scss';
import React, { useContext, useEffect } from 'react';
import { ModalContext } from '../../../../context/ModalContext';
import { ModalStateContext } from '../../../../context/ModalStateContext';

export const Details = ({ post }) => {
  const { updateModalContext } = useContext(ModalContext);
  const { updateModalStateContext } = useContext(ModalStateContext);

  const handleClick = () => {
    updateModalContext(true);
    updateModalStateContext(post);
  };

  return (
    <div>
      <li className="detail" onClick={() => handleClick()}>
        Details
      </li>
    </div>
  );
};
