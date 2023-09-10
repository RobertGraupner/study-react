import React from 'react';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';
import PropTypes from 'prop-types';
import ViewWrapper from '../../molecules/ViewWrapper/ViewWrapper';

const Form = ({ handleAddUser, handleInputChange, formValues }) => {
  return (
    <ViewWrapper as='form' onSubmit={handleAddUser}>
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
    </ViewWrapper>
  );
};

Form.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired
};

export default Form;
