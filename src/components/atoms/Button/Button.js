import React from 'react';
import styles from './Button.module.scss';
import { ReactComponent as RemoveIcon } from '../../../assets/icons/remove-icon.svg';

const Button = () => {
  return (
    <button className={styles.button}>
      <RemoveIcon />
    </button>
  );
};

export default Button;
