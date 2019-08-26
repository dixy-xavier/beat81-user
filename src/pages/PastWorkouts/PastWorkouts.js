import React, { useEffect, useState } from 'react';
import { GET_WORKOUT_RESULTS } from '../../constants/urls';
import { queryObjToSearchStr, request } from '../../utils/utils';
import PastWorkoutsData from './components/PastWorkoutsData/PastWorkoutsData';
import PastWorkoutsHeader from './components/PastWorkoutsHeader/PastWorkoutsHeader';
import styles from './PastWorkouts.module.css';

const PastWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    if (!workouts.length) {
      request(queryObjToSearchStr(GET_WORKOUT_RESULTS, { userId: 1 })).then(response => {
        if (response.length && response[0].data) setWorkouts(response[0].data);
      });
    }
  });
  return (
    <div className={styles.pastWorkoutsWrapper}>
      <PastWorkoutsHeader />
      <PastWorkoutsData workouts={workouts} />
    </div>
  );
};

export default PastWorkouts;
