import React from 'react';
import styles from './UsersList.module.scss';
import shortid from 'shortid';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import ViewWrapper from '../../molecules/ViewWrapper/ViewWrapper';
import PropTypes from 'prop-types';

const UsersList = ({ deleteUser, user }) => {
  return (
    <ViewWrapper>
      <ul className={styles.list}>
        {user.map((user) => (
          <UsersListItem
            deleteUser={deleteUser}
            user={user}
            key={shortid.generate()}
          />
        ))}
      </ul>
    </ViewWrapper>
  );
};

UsersList.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  user: PropTypes.array.isRequired
};

export default UsersList;
