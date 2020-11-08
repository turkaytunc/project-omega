import React, { useState, createContext } from 'react';

const ModalStateContext = createContext(false);

const ModalStateContextProvider = ({ children }) => {
  const [modalStateContext, setModalStateContext] = useState(false);

  return (
    <ModalStateContext.Provider
      value={{
        modalStateContext,
        updateModalStateContext: (param) => setModalStateContext(param),
      }}
    >
      {children}
    </ModalStateContext.Provider>
  );
};

const ModalStateContextConsumer = ModalStateContext.Consumer;

export {
  ModalStateContextProvider,
  ModalStateContextConsumer,
  ModalStateContext,
};
