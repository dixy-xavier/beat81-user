import React from 'react';
import HEADERS from '../../PastWorkouts.constants';
import { getValue } from '../../PastWorkoutsData.utilities';
import styles from './PastWorkoutsData.module.css';

const PastWorkoutsDataCard = ({ workout }) => (
  <div className={styles.cardWrapper}>
    {HEADERS.map(item => (
      <div key={item.label} className={styles.cell}>
        {getValue(workout, item.name)}
      </div>
    ))}
  </div>
);

const PastWorkoutsData = ({ workouts }) => (
  <div className={styles.dataWrapper}>
    {workouts.map(item => (
      <PastWorkoutsDataCard key={item.id} workout={item} />
    ))}
  </div>
);

export default PastWorkoutsData;
