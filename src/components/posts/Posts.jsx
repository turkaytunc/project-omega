import './posts.scss';
import { Post } from '../post/Post';
import { getPosts } from '../../http/getPosts';
import { useState, useEffect } from 'react';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((e) => setPosts(e));
  }, []);

  return (
    <div className="posts-container">
      {posts.map((e) => (
        <Post post={e} />
      ))}
    </div>
  );
};
