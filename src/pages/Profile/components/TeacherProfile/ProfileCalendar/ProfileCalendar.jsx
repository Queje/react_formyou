import PromotionsCalendar from "components/Promotions/PromotionsCalendar";
import useFetch from "hooks/useFetch";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ProfileCalendar = ({ courses }) => {
  const { data, get } = useFetch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const formatPromotions = (promotions) => {
    let list = [];
    promotions.forEach((promo) => {
      courses.forEach((course) => {
        if (promo.course_id === course.id) {
          const infos = {
            title: [course.title.toUpperCase(), promo.remaining_seats],
            start: promo.start_date.split("").slice(0, 10).join(""),
            end: promo.start_date.split("").slice(0, 10).join(""),
            id: promo.id,
            allDay: true,
          };
          list.push(infos);
        }
      });
    });
    return list;
  };

  useEffect(() => {
    get(`/promotions?teacher_id=${currentUser.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container text-center">
      <h2>Calendar : </h2>
      {data && <PromotionsCalendar promotions={formatPromotions(data)} />}
    </div>
  );
};

export default ProfileCalendar;
