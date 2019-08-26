import React from 'react';
import HEADERS from '../../PastWorkouts.constants';
import styles from './PastWorkoutsHeader.module.css';

const PastWorkoutsHeader = () => (
  <div className={styles.headerWrapper}>
    {HEADERS.map(header => (
      <div key={header.label} className={styles.headerCell}>{header.label}</div>
    ))}
  </div>
);

export default PastWorkoutsHeader;
