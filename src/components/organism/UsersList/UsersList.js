import React, { useState } from 'react';
import { users } from '../../../data/users';
import shortid from 'shortid';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import styles from './UsersList.module.scss';

const UsersList = () => {
  const [user, setUser] = useState(users);
  console.log(user);

  const deleteUser = (id) => {
    const filteredUsers = user.filter((user) => user.id !== id);
    setUser(filteredUsers);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {user.map((user) => (
          <UsersListItem
            deleteUser={deleteUser}
            user={user}
            key={shortid.generate()}
          />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
