import React from 'react';
import { users } from '../../../data/users';
import shortid from 'shortid';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import styles from './UsersList.module.scss';

const UsersList = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {users.map((user) => (
          <UsersListItem user={user} key={shortid.generate()} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
