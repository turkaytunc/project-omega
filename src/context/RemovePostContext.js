import React, { useState, createContext } from 'react';

const RemovePostContext = createContext([]);

const RemovePostContextProvider = ({ children }) => {
  const [removePostContext, setRemovePostContext] = useState([]);

  return (
    <RemovePostContext.Provider
      value={{
        removePostContext,
        updateRemovePostContext: (param) => setRemovePostContext(param),
      }}
    >
      {children}
    </RemovePostContext.Provider>
  );
};

const RemovePostContextConsumer = RemovePostContext.Consumer;

export {
  RemovePostContextProvider,
  RemovePostContextConsumer,
  RemovePostContext,
};
