import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import Student from "./components/Student/Student";

const Promotion = ({ match }) => {
  const { data, get } = useFetch();
  const { promotion, course, subscriptions } = data || {};
  const startdate = promotion?.start_date.split("").slice(0, 10).join("");

  useEffect(() => {
    const promotionId = Number(match.params.id);
    get(`/promotions/${promotionId}?subscription=true`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      {course && <h2>Cours : {course.title}</h2>}
      {promotion && (
        <>
          <p>Le : {startdate}</p>
          <p>Class : {promotion.classroom_id}</p>
        </>
      )}
      <ul>
        <h3>Les eleves inscrit sont : </h3>
        {subscriptions &&
          subscriptions.map((sub) => {
            return (
              <>
                <Student
                  key={sub.id}
                  subscription={sub.subscription}
                  student={sub.student}
                  startdate={startdate}
                />
              </>
            );
          })}
      </ul>
    </div>
  );
};

export default Promotion;
