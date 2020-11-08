import React, { useContext } from 'react';
import './details-modal.scss';
import { ModalContext } from '../../../../context/ModalContext';
import { ModalStateContext } from '../../../../context/ModalStateContext';

export const DetailsModal = ({ children }) => {
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
      <div className="modal-container">
        <ul>
          <li className="details-modal-header">Post Details</li>
          <li class="modal-title">{modalStateContext.title}</li>
          <li>{modalStateContext.body}</li>
          <button className="close-button" onClick={() => handleDetails()}>
            Close
          </button>
        </ul>
      </div>
    </div>
  );
};
