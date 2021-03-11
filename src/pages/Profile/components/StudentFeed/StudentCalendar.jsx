import PromotionsCalendar from "components/Promotions/PromotionsCalendar";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const StudentCalendar = () => {
  const { data, get } = useFetch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const formatPromotions = (subscriptions) => {
    let list = [];
    subscriptions.forEach((sub) => {
      const infos = {
        title: [sub.course.title.toUpperCase(), sub.seat_left],
        start: sub.promotion.start_date.split("").slice(0, 10).join(""),
        end: sub.promotion.start_date.split("").slice(0, 10).join(""),
        id: sub.promotion.id,
        allDay: true,
      };
      list.push(infos);
    });
    return list;
  };

  useEffect(() => {
    get(`/users/${currentUser.id}/subscriptions?student=true`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>{data && <PromotionsCalendar promotions={formatPromotions(data)} />}</>
  );
};

export default StudentCalendar;
