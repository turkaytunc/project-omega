import React, { useContext } from 'react';
import { ChildUser } from './child/ChildUser';
import { findLocalParentById } from '../../local-data/findLocalParentById';
import './user-menu-container.scss';
import { UserContext } from '../../context/UserContext';

const UserMenuContainer = () => {
  const { state } = useContext(UserContext);

  return (
    <section className="user-menu-container">
      {findLocalParentById(null).map((e) => (
        <ChildUser key={e.id} userId={e.id} userName={e.name} />
      ))}
    </section>
  );
};

export default UserMenuContainer;
