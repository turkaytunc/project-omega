import './post.scss';

import { SinglePost } from '../single-post/SinglePost';
import { useState } from 'react';

export const Post = ({ post }) => {
  const [search, setSearch] = useState('');

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="post-container">
      <input
        className="search-box"
        type="search"
        value={search}
        placeholder="Search"
        onChange={(e) => handleInput(e)}
      />
      {post.posts.map((e) => (
        <SinglePost key={e.id} post={e} />
      ))}
    </div>
  );
};
