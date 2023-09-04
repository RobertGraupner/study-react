import React from 'react';
import styles from './FormField.module.scss';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import PropTypes from 'prop-types';

const FormField = ({ value, onChange, label, id, name, type = 'text' }) => {
  return (
    <div className={styles.wrapper}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormField;
