import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NextWorkouts from '../../pages/NextWorkouts/NextWorkouts';
import PastWorkouts from '../../pages/PastWorkouts/PastWorkouts';
import Statistics from '../../pages/Statistics/Statistics';
import styles from './Main.module.css';

const Main = () => (
  <main className={styles.mainWrapper}>
    <Switch>
      <Route exact path='/' component={PastWorkouts} />
      <Route path='/next-workouts' component={NextWorkouts} />
      <Route path='/statistics' component={Statistics} />
    </Switch>
  </main>
);

export default Main;
