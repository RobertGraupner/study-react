import React from 'react';
import { users } from '../../data/users';
import shortid from 'shortid';
import UsersListItem from '../UsersListItem/UsersListItem';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <UsersListItem user={user} key={shortid.generate()} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
