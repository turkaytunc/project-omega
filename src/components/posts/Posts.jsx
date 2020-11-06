import './posts.scss';
import { Post } from '../post/Post';

export const Posts = () => {
  const mockPost = [];
  for (let i = 0; i < 10; i++) {
    mockPost.push(<Post key={i} n={i} />);
  }

  return <div className="posts-container">{mockPost.map((e) => e)}</div>;
};
