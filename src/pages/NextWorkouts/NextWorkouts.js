import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { GET_BOOKINGS } from '../../constants/urls';
import { queryObjToSearchStr, request } from '../../utils/utils';
import styles from './NextWorkouts.module.css';

const localizer = momentLocalizer(moment);

const Booking = ({ type, coach, location }) => (
  <div>
    <div className={styles.label}>{type}</div>
    <div className={styles.label}>{coach}</div>
    <div className={styles.label}>{location}</div>
  </div>
);

const NextWorkouts = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    if (!bookings.length) {
      request(queryObjToSearchStr(
        GET_BOOKINGS,
        { userId: 1, 'workout.date_gte': new Date().toISOString() }
      )).then(response => setBookings(response));
    }
  });
  return (
    <div className={styles.wrapper}>
      <Calendar
        localizer={localizer}
        events={bookings.map(booking => ({
          title: <Booking type={booking.workout.type} coach={booking.workout.coach.name}
                          location={booking.location.name} />,
          start: new Date(booking.workout.date),
          end: new Date(booking.workout.date),
        }))}
      />
    </div>
  );
};

export default NextWorkouts;
