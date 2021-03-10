/* eslint-disable no-unused-vars */
import "./PromotionsCalendar.scss";
import "../../../node_modules/react-big-calendar/lib/sass/styles.scss";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const PromotionsCalendar = ({ promotions, courses }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const history = useHistory();
  const [sessions, setSessions] = useState([]);
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    let list = [];
    promotions?.forEach((promo) => {
      courses?.forEach((course) => {
        if (promo.course_id === course.id) {
          const infos = {
            title: course.title,
            start: promo.start_date.split("").slice(0, 10).join(""),
            end: promo.start_date.split("").slice(0, 10).join(""),
            id: promo.id,
            allDay: true,
          };
          list.push(infos);
        }
      });
    });
    setSessions(list);
  }, [promotions, courses]);

  const handleSelectEvent = (event) => {
    if (currentUser.role === "teacher") {
      history.push(`/promotions/${event.id}`);
    } else {
      alert(`You subscribe at: ${event.title} ${event.id}`);
    }
  };

  return sessions && sessions.length > 0 ? (
    <>
      <div className="container">
        {sessions.length === 1 ? (
          <p>{sessions.length} session found</p>
        ) : (
          <p>{sessions.length} sessions found</p>
        )}
        <Calendar
          localizer={localizer}
          events={sessions}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={handleSelectEvent}
        />
      </div>
    </>
  ) : (
    <p>No sessions for this course yet</p>
  );
};

export default PromotionsCalendar;
