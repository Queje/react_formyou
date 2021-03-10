import React, { useEffect, useState } from 'react';
import { getPromotions } from '../../Services/promotionsService';
import { getCourses } from 'Services/coursesService';
import PromotionsCalendar from '../../Components/PromotionsCalendar/promotionsCalendar';

const Course = ({ match }) => {
  const [course, setCourse] = useState();
  const [promotions, setPromotions] = useState();

  const getCourse = async () => {
    const courses = await getCourses()
    const courseToShow = await courses.filter(c => c.id == match.params.id)
    setCourse(await courseToShow[0])
  }
  const fetchPromotions = async () => {
    const promotions = await getPromotions()
    const promotionToShow = await promotions.filter(p => p.course_id == match.params.id)
    setPromotions(promotionToShow)
    }

  useEffect(() => {fetchPromotions(); getCourse()}, [])

  console.log("Promotion:", promotions)

  return (
    <div>
      {course && <h1>{course.title}</h1>}
      {promotions && <PromotionsCalendar promotions={promotions} course={course} />}
    </div>
  )
};

export default Course;
