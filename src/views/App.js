import React from 'react';
import UsersList from '../components/organism/UsersList/UsersList';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <UsersList />
    </div>
  );
};

export default App;
