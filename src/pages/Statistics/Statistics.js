import React, { useEffect, useState } from 'react';
import { GET_STATISTICS } from '../../constants/urls';
import { queryObjToSearchStr, request } from '../../utils/utils';
import BarChartCard from './components/BarChartCard/BarChartCard';
import CARDS from './Statistics.constants';
import styles from './Statistics.module.css';

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);
  useEffect(() => {
    if (!statistics.length) {
      request(queryObjToSearchStr(GET_STATISTICS, { userId: 1 })).then(response => {
        if (response.length && response[0].data) setStatistics(response[0].data);
      });
    }
  });
  return (
    <div className={styles.statisticsWrapper}>
      {CARDS.map(card => (
        <BarChartCard key={card.name} card={card} statistics={statistics} />
      ))}
    </div>
  );
};

export default Statistics;
