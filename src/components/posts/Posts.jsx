import './posts.scss';
import { Post } from '../post/Post';
import { getPostByUserId } from '../../http/getPostByUserId';
import { useState, useEffect, useContext } from 'react';
import { GlobalState } from '../../context/GlobalContext';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { state } = useContext(GlobalState);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getPostByUserId(state.id).then((e) => setPosts(e));
  }, [state]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <div className="posts-container">
      <input
        className="search-box"
        type="search"
        placeholder="Search"
        onChange={(e) => handleInput(e)}
      />
      {posts.map((e) => (
        <Post post={e} />
      ))}
    </div>
  );
};
