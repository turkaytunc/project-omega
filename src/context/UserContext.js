import React, { useState, createContext } from 'react';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [state, setState] = useState(null);
  return (
    <UserContext.Provider
      value={{ state, updateState: (param) => setState(param) }}
    >
      {children}
    </UserContext.Provider>
  );
};

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };