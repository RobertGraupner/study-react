import React, { useContext, useState } from 'react';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';
import ViewWrapper from '../../molecules/ViewWrapper/ViewWrapper';
import { UserContext } from '../../../views/App';

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    attendance: '',
    average: ''
  });

  const context = useContext(UserContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    context.handleAddUser(formValues);
    setFormValues({
      name: '',
      attendance: '',
      average: ''
    });
  };
  return (
    <ViewWrapper as='form' onSubmit={handleSubmitUser}>
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

export default Form;
