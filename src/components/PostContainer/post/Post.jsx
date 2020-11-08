import './post.scss';

import { SinglePost } from '../single-post/SinglePost';
import { useEffect, useState } from 'react';

export const Post = ({ post }) => {
  const [search, setSearch] = useState('');
  const [filteredSearch, setFilteredSearch] = useState();

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length > 1) {
      console.log('3ten fazla');
      const filterSearch = post.posts.filter((e) => e.id === parseInt(search));
      setFilteredSearch(filterSearch);
    }
  }, [search]);

  useEffect(() => {
    console.log(filteredSearch);
  }, [filteredSearch]);

  return (
    <div className="post-container">
      <input
        className="search-box"
        type="search"
        value={search}
        placeholder="Search"
        onChange={(e) => handleInput(e)}
      />
      {search.length > 1
        ? filteredSearch
          ? filteredSearch.map((e) => <SinglePost key={e.id} post={e} />)
          : null
        : post.posts.map((e) => <SinglePost key={e.id} post={e} />)}
    </div>
  );
};
