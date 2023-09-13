import React, { useState, createContext } from 'react';
import { users } from '../data/users';
import shortid from 'shortid';
import PropType from 'prop-types';

// default UserContext value to protect if the function fails to execute
export const UserContext = createContext({
  user: [],
  deleteUser: () => {},
  handleAddUser: () => {}
});

const UserProvider = ({ children }) => {
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
    <UserContext.Provider value={{ user, deleteUser, handleAddUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropType.node
};

export default UserProvider;
