import moment from 'moment';
import React from 'react';
import { isDate } from '../../../../utils/utils';
import HEADERS from '../../PastWorkouts.constants';
import { getValue } from '../../PastWorkoutsData.utilities';
import styles from './PastWorkoutsData.module.css';

const getDisplayValue = (workout, key) => {
  const value = getValue(workout, key);
  const isValueDate = isDate(value);
  return (isValueDate ? moment(value).format('DD-MM-YYYY') : value);
};

const PastWorkoutsDataCard = ({ workout }) => (
  <div className={styles.cardWrapper}>
    {HEADERS.map(item => (
      <div key={item.label} className={styles.cell}>
        {getDisplayValue(workout, item.name)}
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
