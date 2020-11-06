import React from 'react';
import { UserButton } from './menu/UserButton';
import { findLocalParentById } from '../../local-data/findLocalParentById';
import './user-menu-container.scss';

const UserMenuContainer = () => {
  return (
    <section className="user-menu-container">
      {findLocalParentById(null).map((e) => (
        <UserButton key={e.id} userId={e.id} userName={e.name}></UserButton>
      ))}
    </section>
  );
};

export default UserMenuContainer;
