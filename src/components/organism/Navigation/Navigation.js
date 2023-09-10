import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <h1>Study react</h1>
      </div>
      <Link to='/' className={styles.link}>
        User list
      </Link>
      <Link to='/add-user' className={styles.link}>
        Add user
      </Link>
    </div>
  );
};

export default Navigation;
