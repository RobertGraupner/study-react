import React from 'react';
import Navigation from '../../organism/Navigation/Navigation';
import SearchBar from '../../organism/SearchBar/SearchBar';
import styles from './MainTemplate.module.scss';
import NewsSection from '../../templates/NewsSection/NewsSection';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node
};

export default MainTemplate;
