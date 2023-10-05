import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UsersList from '../components/organism/UsersList/UsersList';
import Form from '../components/organism/Form/Form';
import styles from './App.module.scss';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import UserProvider from '../providers/UsersProvider';

const App = () => {
  return (
    <MainTemplate>
      {/* Provider always takes only one prop */}
      <UserProvider>
        <div className={styles.container}>
          <Routes>
            <Route path='/' element={<UsersList />} />
            <Route path='/add-user' element={<Form />} />
          </Routes>
        </div>
      </UserProvider>
    </MainTemplate>
  );
};

export default App;
