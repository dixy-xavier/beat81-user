import React from 'react';
import Profile from '../Profile/Profile';
import Tabs from '../Tabs/Tabs';
import Main from '../Main/Main';
import styles from './App.module.css';

const App = () => (
  <div className={styles.appContainer}>
    <Profile />
    <Tabs />
    <Main />
  </div>
);

export default App;
