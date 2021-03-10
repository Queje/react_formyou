import PromotionsCalendar from "Components/PromotionsCalendar/promotionsCalendar";
import useFetch from "Hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCourses } from "Services/coursesService";
import { getPromotions } from "Services/promotionsService";

const ProfileCalendar = ({ courses }) => {
  const { data, get } = useFetch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    get(`/promotions?teacher_id=${currentUser.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Calendar : </h2>
      {data && <PromotionsCalendar courses={courses} promotions={data} />}
    </div>
  );
};

export default ProfileCalendar;
