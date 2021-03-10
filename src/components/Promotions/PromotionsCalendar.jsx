import React from "react";
import "./PromotionsCalendar.scss";
import "../../../node_modules/react-big-calendar/lib/sass/styles.scss";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const PromotionsCalendar = ({ promotions }) => {
  const localizer = momentLocalizer(moment);

  return (
    <div className="Calendar">
      <Calendar
        localizer={localizer}
        events={promotions}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) =>
          alert(`You subscribe at: ${event.title} ${event.id}`)
        }
      />
    </div>
  );
};

export default PromotionsCalendar;
