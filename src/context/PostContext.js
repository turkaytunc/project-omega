import React, { useState, createContext } from 'react';

const PostState = createContext(null);

const PostStateProvider = ({ children }) => {
  const [postState, setPostState] = useState([]);

  return (
    <PostState.Provider
      value={{ postState, updatePostState: (param) => setPostState(param) }}
    >
      {children}
    </PostState.Provider>
  );
};

const PostStateConsumer = PostState.Consumer;

export { PostStateProvider, PostStateConsumer, PostState };
