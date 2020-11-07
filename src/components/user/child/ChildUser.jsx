import React, { useContext, useEffect, useState } from 'react';
import './child-user.scss';
import { findLocalParentById } from '../../../local-data/findLocalParentById';
import { UserContext } from '../../../context/UserContext';
import { SubChild } from './sub-child/SubChild';

export const ChildUser = ({ userId, userName }) => {
  const { state, updateState } = useContext(UserContext);

  const handleClick = (e, id) => {
    const divId = document.getElementById(`${id}`);
  };
  return (
    <div onClick={(e) => handleClick(e, userId)}>
      id: {userId}, name: {userName}
      {findLocalParentById(userId).map((e) => (
        <SubChild userId={e.id} key={e.id} userName={e.name}></SubChild>
      ))}
    </div>
  );
};
