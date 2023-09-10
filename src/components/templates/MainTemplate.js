import React from 'react';
import Navigation from '../organism/Navigation/Navigation';
import styles from './MainTemplate.module.scss';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      {children}
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node
};

export default MainTemplate;
