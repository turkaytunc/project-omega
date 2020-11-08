import React, { useContext } from 'react';
import './modal.scss';
import { ModalContext } from '../../../../context/ModalContext';
import { ModalStateContext } from '../../../../context/ModalStateContext';

export const Modal = ({ children }) => {
  const { modalContext, updateModalContext } = useContext(ModalContext);
  const { modalStateContext, updateModalStateContext } = useContext(
    ModalStateContext
  );
  if (!modalContext) return null;

  const handleDetails = () => {
    updateModalContext(false);
    updateModalStateContext({});
  };

  return (
    <div className="modal">
      {children}
      <button className="close-button" onClick={() => handleDetails()}>
        Close
      </button>
      <div className="modal-container">
        <ul>
          <li>{modalStateContext.title}</li>
          <li>{modalStateContext.id}</li>
          <li>{modalStateContext.body}</li>
        </ul>
      </div>
    </div>
  );
};
