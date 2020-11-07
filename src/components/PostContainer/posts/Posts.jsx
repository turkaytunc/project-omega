import './posts.scss';
import { Post } from '../post/Post';
import { getPostByUserId } from '../../../http/getPostByUserId';
import { useState, useEffect, useContext } from 'react';
import { GlobalState } from '../../../context/GlobalContext';
import { PostState } from '../../../context/PostContext';

export const Posts = () => {
  const { state } = useContext(GlobalState);
  const { postState, updatePostState } = useContext(PostState);

  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);

  const hasPostInPostState = (idToFind) =>
    postState.some((e) => e.id === idToFind);

  const populatePosts = (givenId) => {
    if (hasPostInPostState(givenId)) {
      setPosts(postState.filter((e) => e.id === givenId));
    } else {
      getPostByUserId(givenId).then((e) =>
        updatePostState([...postState, { id: e[0].userId, posts: [...e] }])
      );
    }
  };

  const handlePopulate = () => {
    populatePosts(state);
  };

  useEffect(() => {
    populatePosts(state);
  }, [state]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="posts-container">
      <button onClick={() => handlePopulate()}>Get Posts</button>
      <input
        className="search-box"
        type="search"
        value={search}
        placeholder="Search"
        onChange={(e) => handleInput(e)}
      />
      {posts.map((e, i) => (
        <Post key={i} post={e} />
      ))}
    </div>
  );
};
