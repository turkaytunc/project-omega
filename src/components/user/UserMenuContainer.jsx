import React from 'react';
import UserMenu from './menu/UserMenu';
import { renderUser } from '../../local-data/renderUser';
import './user-menu-container.scss';

const UserMenuContainer = () => {
  return (
    <section className="user-menu-container">
      {renderUser(null)
        ? renderUser(null).map((e) => {
            return <UserMenu id={e.id} root={e} />;
          })
        : null}
    </section>
  );
};

export default UserMenuContainer;
