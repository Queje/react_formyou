import React from "react";
import "./PromotionsCalendar.scss";
import "../../../node_modules/react-big-calendar/lib/sass/styles.scss";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const PromotionsCalendar = ({ promotions }) => {
  const localizer = momentLocalizer(moment);

  const Event = ({ event }) => {
    return (
      <span>
        <strong>{event.title[0]}</strong>
        <br />
        <i>{event.title[1]}</i>
      </span>
    );
  };

  return (
    <div className="Calendar">
      <Calendar
        localizer={localizer}
        events={promotions}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month", "week"]}
        onSelectEvent={(event) =>
          alert(`You subscribe at: ${event.title} ${event.id}`)
        }
        components={{
          event: Event,
        }}
      />
    </div>
  );
};

export default PromotionsCalendar;
