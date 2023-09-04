import React from 'react';
import styles from './Label.module.scss';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, children }) => {
  return (
    <>
      <label htmlFor={htmlFor} className={styles.label}>
        {children}
      </label>
    </>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default Label;
