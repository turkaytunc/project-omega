import './posts.scss';
import { Post } from '../post/Post';
import { getPostByUserId } from '../../../http/getPostByUserId';
import { removePostByPostIds } from '../../../http/removePostByPostIds';
import { useState, useEffect, useContext, useCallback } from 'react';
import { GlobalState } from '../../../context/GlobalContext';
import { PostState } from '../../../context/PostContext';
import { RemovePostContext } from '../../../context/RemovePostContext';

export const Posts = () => {
  // Global states
  const { state } = useContext(GlobalState);
  const { postState, updatePostState } = useContext(PostState);
  const { removePostContext, updateRemovePostContext } = useContext(
    RemovePostContext
  );

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

  const handleRemove = () => {
    removePostByPostIds(removePostContext)
      .then((e) => console.log(`removed post by ids: ${removePostContext}`))
      .catch((e) => console.log(e));
    updateRemovePostContext([]);
  };

  return (
    <div className="posts-container">
      {posts.map((e, i) => (
        <Post key={i} post={e} />
      ))}
      <button className="save-button" onClick={() => handleRemove()}>
        Save
      </button>
    </div>
  );
};
