import React, { useContext, useReducer } from 'react';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';
import ViewWrapper from '../../molecules/ViewWrapper/ViewWrapper';
import { UserContext } from '../../../providers/UsersProvider';

// funkcja reduktora do aktualiacji stanu poprzez useReducer, a nie useState
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'RESET':
      return {
        name: '',
        attendance: '',
        average: ''
      };
    default:
      return state;
  }
};

const Form = () => {
  // zmieniamy useState na useReducer i tworzymy customową funkcję aktualizacji stanu dispatch
  const [formValues, dispatch] = useReducer(reducer, {
    name: '',
    attendance: '',
    average: ''
  });
  // const context = useContext(UserContext);
  // wyciągamu poprzez destrukturyzacje funkcję przekazaną z contex -> handeAddUser
  const { handleAddUser } = useContext(UserContext);

  const handleInputChange = (e) => {
    dispatch({
      type: 'SET_VALUE',
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    // context.handleAddUser(formValues);
    handleAddUser(formValues);
    dispatch({ type: 'RESET' });
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
