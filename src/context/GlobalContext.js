import React, { useState, createContext } from 'react';

const GlobalState = createContext(null);

const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState([1]);

  return (
    <GlobalState.Provider
      value={{ state, updateState: (param) => setState(param) }}
    >
      {children}
    </GlobalState.Provider>
  );
};

const GlobalStateConsumer = GlobalState.Consumer;

export { GlobalStateProvider, GlobalStateConsumer, GlobalState };
