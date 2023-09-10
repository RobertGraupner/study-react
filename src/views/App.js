import React from 'react';
import { users } from '../data/users';
import { Routes, Route } from 'react-router-dom';
import UsersList from '../components/organism/UsersList/UsersList';
import Form from '../components/organism/Form/Form';
import Navigation from '../components/organism/Navigation/Navigation';
import { useState } from 'react';
import shortid from 'shortid';
import styles from './App.module.scss';

const App = () => {
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
    setFormValues({
      name: '',
      attendance: '',
      average: ''
    });
  };

  return (
    <main>
      <Navigation />
      <div className={styles.container}>
        <Routes>
          <Route
            path='/'
            element={<UsersList user={user} deleteUser={deleteUser} />}
          />
          <Route
            path='/add-user'
            element={
              <Form
                formValues={formValues}
                handleInputChange={handleInputChange}
                handleAddUser={handleAddUser}
              />
            }
          />
        </Routes>
      </div>
    </main>
  );
};

export default App;
