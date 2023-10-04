import React from 'react';
import styles from './SearchBar.module.scss';
import Input from '../../atoms/Input/Input';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarLabel}>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </div>
      <Input className={styles.searchBarInput} />
    </div>
  );
};

export default SearchBar;
