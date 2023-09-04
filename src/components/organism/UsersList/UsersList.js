import React, { useState } from 'react';
import styles from './UsersList.module.scss';
import { users } from '../../../data/users';
import shortid from 'shortid';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import FormField from '../../molecules/FormField/FormField';
import Title from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button';

const UsersList = () => {
  const [user, setUser] = useState(users);
  const [formValues, setFormValues] = useState({
    name: '',
    attendance: '',
    average: ''
  });

  const deleteUser = (id) => {
    const filteredUsers = user.filter((user) => user.id !== id);
    setUser(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: shortid.generate(),
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average
    };
    setUser([...user, newUser]);
  };

  return (
    <>
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
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {user.map((user) => (
            <UsersListItem
              deleteUser={deleteUser}
              user={user}
              key={shortid.generate()}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default UsersList;
