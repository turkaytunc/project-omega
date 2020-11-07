import './post.scss';

import { SinglePost } from '../single-post/SinglePost';

export const Post = ({ post }) => {
  return (
    <div className="post-container">
      {post.posts.map((e) => (
        <SinglePost post={e} />
      ))}
    </div>
  );
};
