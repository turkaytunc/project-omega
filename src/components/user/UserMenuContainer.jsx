import React, { useContext } from 'react';
import { ChildUser } from './child/ChildUser';
import { findLocalParentById } from '../../local-data/findLocalParentById';
import './user-menu-container.scss';
import { UserContext } from '../../context/UserContext';

const UserMenuContainer = () => {
  const { state, updateState } = useContext(UserContext);

  const populateParent = () =>
    findLocalParentById(null).map((e, i) => (
      <ChildUser key={e.id} userId={e.id} userName={e.name} />
    ));

  return <section className="user-menu-container">{populateParent()}</section>;
};

export default UserMenuContainer;
