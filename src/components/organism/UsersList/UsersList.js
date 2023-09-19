import React, { useContext } from 'react';
import styles from './UsersList.module.scss';
import shortid from 'shortid';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import ViewWrapper from '../../molecules/ViewWrapper/ViewWrapper';
import { UserContext } from '../../../providers/UsersProvider';

const UsersList = () => {
  const { user } = useContext(UserContext);
  const sortedUsers = user.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ViewWrapper>
      <ul className={styles.list}>
        {sortedUsers.map((user) => (
          <UsersListItem user={user} key={shortid.generate()} />
        ))}
      </ul>
    </ViewWrapper>
  );
};

export default UsersList;
