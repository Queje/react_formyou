/* eslint-disable no-unused-vars */

import '../../../node_modules/react-big-calendar/lib/sass/styles.scss'
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const PromotionsCalendar = (props) => {
  const localizer = momentLocalizer(moment);
  const myEventsList =[
              {
                title: "First Session",
                place: 6,
                start: "2021-03-08",
                end:   "2021-03-08",
              }];
  return (
    <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
    </div>
  )
};

export default PromotionsCalendar;
