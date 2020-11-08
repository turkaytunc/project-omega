import React, { useState, createContext } from 'react';

const ModalContext = createContext(false);

const ModalContextProvider = ({ children }) => {
  const [modalContext, setModalContext] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        modalContext,
        updateModalContext: (param) => setModalContext(param),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const ModalContextConsumer = ModalContext.Consumer;

export { ModalContextProvider, ModalContextConsumer, ModalContext };
