import React from 'react';
import Navigation from '../organism/Navigation/Navigation';
import SearchBar from '../organism/SearchBar/SearchBar';
import styles from './MainTemplate.module.scss';
import PropTypes from 'prop-types';

const News = () => {
  return <div className={styles.news}></div>;
};

const MainTemplate = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <SearchBar />
      {children}
      <News />
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node
};

export default MainTemplate;
