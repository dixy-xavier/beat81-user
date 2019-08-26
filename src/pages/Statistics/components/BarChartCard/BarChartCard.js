import React from 'react';
import { Bar, BarChart, Cell, XAxis, YAxis } from 'recharts';
import styles from './BarChartCard.module.css';

const CustomizedLabel = ({ x, y, fill, value }) => (
  <text x={x} y={y} fontSize="16" fill={fill}>
    {value}
  </text>
);

const BarChartCard = ({ card, statistics }) => (
  <div className={styles.cardWrapper}>
    <div className={styles.cardLabel}>
      {card.label}
    </div>
    <BarChart
      width={200}
      height={400}
      data={statistics}
      margin={{ top: 25, right: 0, left: 0, bottom: 25 }}
    >
      <XAxis dataKey="month" tickSize />
      <YAxis hide />
      <Bar
        dataKey={card.name}
        barSize={75}
        fontFamily="sans-serif"
        label={<CustomizedLabel />}
      >
        {statistics.map((entry, index) => (
          <Cell fill={statistics[index].color} />
        ))}
      </Bar>
    </BarChart>
  </div>
);

export default BarChartCard;
