import './posts.scss';
import { Post } from '../post/Post';
import { getPostByUserId } from '../../../http/getPostByUserId';
import { useState, useEffect, useContext, useCallback } from 'react';
import { GlobalState } from '../../../context/GlobalContext';
import { PostState } from '../../../context/PostContext';

export const Posts = () => {
  // Global states
  const { state } = useContext(GlobalState);
  const { postState, updatePostState } = useContext(PostState);

  // Local states

  const [posts, setPosts] = useState([]);

  // Check if post is already in local state
  const hasPostInPostState = useCallback(
    (idToFind) => postState.some((e) => e.id === idToFind),
    [postState]
  );

  // Get posts
  const populatePosts = useCallback(
    (givenId) => {
      if (hasPostInPostState(givenId)) {
        setPosts(postState.filter((e) => e.id === givenId));
      } else {
        getPostByUserId(givenId).then((e) =>
          updatePostState([...postState, { id: e[0].userId, posts: [...e] }])
        );
      }
    },
    [postState, hasPostInPostState, updatePostState]
  );

  // Handle rendering
  useEffect(() => {
    populatePosts(state);
  }, [state, postState, populatePosts]);

  const handlePopulate = () => {
    populatePosts(state);
  };

  return (
    <div className="posts-container">
      {posts.map((e, i) => (
        <Post key={i} post={e} />
      ))}
      <button className="save-button" onClick={() => handlePopulate()}>
        Save
      </button>
    </div>
  );
};
