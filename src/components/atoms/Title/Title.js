import React from 'react';
import styles from './Title.module.scss';
import PropTypes from 'prop-types';

const Title = ({ children }) => {
  return (
    <>
      <h1 className={styles.title}>{children}</h1>
    </>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default Title;
