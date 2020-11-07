import React from 'react';
import { ChildUser } from './child/ChildUser';
import { findLocalParentById } from '../../local-data/findLocalParentById';
import './user-menu-container.scss';

const UserMenuContainer = () => {
  const populateParent = () =>
    findLocalParentById(null).map((e, i) => (
      <ChildUser key={e.id} parentId={e.id} userName={e.name} />
    ));

  return <section className="user-menu-container">{populateParent()}</section>;
};

export default UserMenuContainer;
