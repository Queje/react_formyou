import Student from "Components/Student/Student";
import useFetch from "Hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Promotion = ({ match }) => {
  const { data, get } = useFetch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { promotion, course, subscriptions } = data || {};

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
          <p>Le : {promotion.start_date}</p>
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
                  subscription={sub}
                  promotion={promotion}
                />
              </>
            );
          })}
      </ul>
    </div>
  );
};

export default Promotion;
