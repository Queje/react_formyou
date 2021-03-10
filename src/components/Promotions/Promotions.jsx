/* eslint-disable no-unused-vars */
import "./PromotionsCalendar.scss";
import "../../../node_modules/react-big-calendar/lib/sass/styles.scss";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import useFetch from "Hooks/useFetch";
import PromotionsCalendar from "components/Promotions/PromotionsCalendar";

const Promotions = ({ course }) => {
  const { data, error, get } = useFetch();
  const [promotions, setPromotions] = useState([]);
  const localizer = momentLocalizer(moment);

  const formatPromotions = (promotions) => {
    let promotionsList = [];
    promotions.forEach((promotion) => {
      const infos = {
        title: [
          course.title.toUpperCase(),
          `${promotion.remaining_seats} seats available`,
        ],
        start: promotion.start_date.split("").slice(0, 10).join(""),
        end: promotion.start_date.split("").slice(0, 10).join(""),
        id: promotion.id,
        allDay: true,
      };
      promotionsList.push(infos);
    });
    return promotionsList;
  };

  useEffect(() => {
    get(`/courses/${course.id}/promotions`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Promotions">
      {(data && data.length > 0 && (
        <div className="container">
          {(data.length === 1 && <p>{data.length} session found</p>) || (
            <p>{data.length} sessions found</p>
          )}
          <PromotionsCalendar promotions={formatPromotions(data)} />
        </div>
      )) || <p>No dates for this course yet</p>}
    </div>
  );
};

export default Promotions;
