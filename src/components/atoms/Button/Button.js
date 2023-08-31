import React from 'react';
import styles from './Button.module.scss';
import { ReactComponent as RemoveIcon } from '../../../assets/icons/remove-icon.svg';

const Button = (props) => {
  return (
    <button className={styles.button} {...props}>
      <RemoveIcon />
    </button>
  );
};

export default Button;
