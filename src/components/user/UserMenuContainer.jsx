import React from 'react';
import { ChildUser } from './child/ChildUser';
import { findLocalParentById } from '../../local-data/findLocalParentById';
import './user-menu-container.scss';

const UserMenuContainer = () => {
  return (
    <section className="user-menu-container">
      {findLocalParentById(null).map((e) => (
        <ChildUser key={e.id} userId={e.id} userName={e.name}></ChildUser>
      ))}
    </section>
  );
};

export default UserMenuContainer;
