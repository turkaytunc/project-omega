import './posts.scss';
import { Post } from '../post/Post';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

export const Posts = () => {
  const { state } = useContext(UserContext);

  //console.log(stateItem);

  const posts = state.posts
    .map((e) => e)
    .map((e) => (
      <ul>
        <Post n={e}></Post>
      </ul>
    ));

  return <div className="posts-container">{posts}</div>;
};
