import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({ className = '', ...props }) => {
  return (
    <>
      <input className={`${styles.input} ${className}`} {...props}></input>
    </>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  props: PropTypes.object
};

export default Input;
