import React from 'react';
import PropTypes from 'prop-types';
import styles from './UsersListItem.module.scss';
import Button from '../../atoms/Button/Button';

// destrukturyzujemy od razu props
const UsersListItem = ({ user: { average, name, attendance } }) => {
  return (
    <li className={styles.user}>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <Button />
    </li>
  );
};

UsersListItem.propTypes = {
  user: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string
  })
};

export default UsersListItem;
