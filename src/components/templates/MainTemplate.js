import React from 'react';
import Navigation from '../organism/Navigation/Navigation';
import Input from '../atoms/Input/Input';
import SearchBar from '../organism/SearchBar/SearchBar';
import styles from './MainTemplate.module.scss';
import PropTypes from 'prop-types';

const SearchBarLabel = ({ children }) => {
  return <div className={styles.searchBarLabel}>{children}</div>;
};

const News = () => {
  return <div className={styles.news}></div>;
};

const MainTemplate = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <SearchBar>
        <SearchBarLabel>
          <p>Logged as:</p>
          <p>
            <strong>Teacher</strong>
          </p>
        </SearchBarLabel>
        <Input className={styles.searchBarInput} />
      </SearchBar>
      {children}
      <News />
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node
};

SearchBarLabel.propTypes = {
  children: PropTypes.node
};

export default MainTemplate;
