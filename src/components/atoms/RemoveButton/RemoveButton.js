import React from 'react';
import styles from './RemoveButton.module.scss';
import { ReactComponent as RemoveIcon } from '../../../assets/icons/remove-icon.svg';

const RemoveButton = (props) => {
  return (
    <button className={styles.button} {...props}>
      <RemoveIcon />
    </button>
  );
};

export default RemoveButton;
