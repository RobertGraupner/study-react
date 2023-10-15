import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <h1>Study react</h1>
      </div>
      <NavLink
        to='/group'
        className={({ isActive }) =>
          clsx(isActive && styles.linkActive, styles.link)
        }
      >
        User list
      </NavLink>
      <NavLink
        to='/add-user'
        className={({ isActive }) =>
          clsx(isActive && styles.linkActive, styles.link)
        }
      >
        Add user
      </NavLink>
    </div>
  );
};

export default Navigation;
