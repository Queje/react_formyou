import React, { useEffect, useState } from "react";
import { getPromotions } from "services/PromotionsService";
import { getCourses } from "services/CoursesService";
import PromotionsCalendar from "components/PromotionsCalendar/PromotionsCalendar";

const Course = ({ match }) => {
  const [course, setCourse] = useState();
  const [promotions, setPromotions] = useState();

  const getCourse = async () => {
    const courses = await getCourses();
    const courseToShow = await courses.filter((c) => c.id === parseInt(match.params.id));
    console.log("match.params.id",typeof match.params.id)
    setCourse(await courseToShow[0]);
  };
  const fetchPromotions = async () => {
    const promotions = await getPromotions();

    const promotionToShow = await promotions.filter(
      (p) => p.course_id === parseInt(match.params.id)
    );
    setPromotions(promotionToShow);
  };

  useEffect(() => {
    fetchPromotions();
    getCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Promotion:", promotions);

  return (
    <div>
      {course && <h1>{course.title}</h1>}
      {promotions && (
        <PromotionsCalendar promotions={promotions} course={course} />
      )}
    </div>
  );
};

export default Course;
