import React, { useState, createContext, useEffect } from 'react';
// import { users } from '../data/users';
import shortid from 'shortid';
import PropType from 'prop-types';
import axios from 'axios';

// default UserContext value to protect if the function fails to execute
export const UserContext = createContext({
  user: [],
  deleteUser: () => {},
  handleAddUser: () => {}
});

// add mock to application

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => setUser(data.students))
      .catch((err) => console.log(err));
  }, []);

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
    <UserContext.Provider value={{ user, deleteUser, handleAddUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropType.node
};

export default UserProvider;
