import React from 'react';
import { users } from '../data/users';
import { Routes, Route } from 'react-router-dom';
import UsersList from '../components/organism/UsersList/UsersList';
import Form from '../components/organism/Form/Form';
import { useState, createContext } from 'react';
import shortid from 'shortid';
import styles from './App.module.scss';
import MainTemplate from '../components/templates/MainTemplate';

// default UserContext value to protect if the function fails to execute
export const UserContext = createContext({
  user: [],
  deleteUser: () => {},
  handleAddUser: () => {}
});

const App = () => {
  const [user, setUser] = useState(users);

  const deleteUser = (id) => {
    const filteredUsers = user.filter((user) => user.id !== id);
    setUser(filteredUsers);
  };
  // formValues passed from Form.js
  const handleAddUser = (formValues) => {
    const newUser = {
      id: shortid.generate(),
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average
    };
    setUser([...user, newUser]);
  };

  return (
    <MainTemplate>
      {/* Provider always takes only one prop */}
      <UserContext.Provider value={{ user, handleAddUser, deleteUser }}>
        <div className={styles.container}>
          <Routes>
            <Route path='/' element={<UsersList />} />
            <Route path='/add-user' element={<Form />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </MainTemplate>
  );
};

export default App;
