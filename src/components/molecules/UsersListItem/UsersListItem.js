import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './UsersListItem.module.scss';
import Button from '../../atoms/Button/Button';

// destructuring props right away
const UsersListItem = ({ user: { average, name, attendance } }) => {
  // function that returns the background colour for a given average
  const getColor = (average) => {
    if (average > 4.0) return styles.success;
    if (average > 3.0) return styles.warning;
    if (average > 2.0) return styles.error;
    return styles.grey;
  };

  return (
    <li className={styles.user}>
      <div className={clsx(styles.userAverage, getColor(average))}>
        {average}
      </div>
      <div className={styles.userInfo}>
        <p>{name}</p>
        <p>attendace: {attendance}</p>
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
