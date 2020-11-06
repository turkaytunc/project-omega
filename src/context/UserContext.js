import React, { useState, createContext, useEffect } from 'react';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [state, setState] = useState({ userIds: [] });

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
