import React from 'react';
import { renderUser } from '../../../local-data/renderUser';

const UserMenu = ({ id, selected = true, root }) => {
  if (selected) {
    return (
      <div>
        {JSON.stringify(root)}
        <hr />
        {renderUser(id).map((e) => (
          <li>{JSON.stringify(e)}</li>
        ))}
        <br />
        <br />
        <br />
      </div>
    );
  }

  return <div className="">{JSON.stringify(root)}</div>;
};

export default UserMenu;
