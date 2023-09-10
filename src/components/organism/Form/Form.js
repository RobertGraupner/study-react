import React from 'react';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';

const Form = ({ handleAddUser, handleInputChange, formValues }) => {
  return (
    <form className={styles.wrapper} onSubmit={handleAddUser}>
      <Title>Add new student</Title>
      <FormField
        label='Name'
        id='name'
        name='name'
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label='Attendance'
        id='attendance'
        name='attendance'
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label='Average'
        id='average'
        name='average'
        value={formValues.average}
        onChange={handleInputChange}
      />
      <Button>Add</Button>
    </form>
  );
};

Form.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired
};

export default Form;
