import { useEffect } from "react";
import useFetch from "hooks/useFetch";
import PromotionsCalendar from "components/Promotions/PromotionsCalendar";

const GlobalCalendar = () => {
  const { data, get } = useFetch();

  const formatPromotions = (promotions) => {
    let promotionsList = [];
    promotions.forEach((promotion) => {
      const infos = {
        title: [
          promotion.course_title.toUpperCase(),
          promotion.remaining_seats,
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
    get(`/promotions`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="GlobalCalendar">
      <div className="Promotions">
        {(data && data.length > 0 && (
          <>
            {(data.length === 1 && <p>{data.length} session found</p>) || (
              <p className="lead text-center">{data.length} sessions found</p>
            )}
            <div className="container">
              <PromotionsCalendar promotions={formatPromotions(data)} />
            </div>
          </>
        )) || <p>No dates for this course yet</p>}
      </div>
    </div>
  );
};

export default GlobalCalendar;
