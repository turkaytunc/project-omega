import React, { useContext, useEffect, useState } from 'react';
import { ChildUser } from './child/ChildUser';
import { findLocalParentById } from '../../local-data/findLocalParentById';
import './user-menu-container.scss';
import { UserContext } from '../../context/UserContext';
import { getPostByUserId } from '../../http/getPostByUserId';
import { getPosts } from '../../http/getPosts';

const UserMenuContainer = () => {
  const { state, updateState } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    const nums = state.activeUserIds;
    let posts = [];

    for (let i = 0; i < nums.length; i++) {
      let singlePost = await getPostByUserId(nums[i]);
      posts.push(singlePost);
    }

    updateState({
      ...state,
      posts: [...posts],
    });
  };
  return (
    <section className="user-menu-container">
      {findLocalParentById(null).map((e) => (
        <ChildUser key={e.id} userId={e.id} userName={e.name} />
      ))}
      <button onClick={() => fetchPosts()}>Fetch Posts</button>
    </section>
  );
};

export default UserMenuContainer;
