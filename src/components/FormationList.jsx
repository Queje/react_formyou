import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCourses } from "services/coursesService";
import CourseCard from "./courseCard";

const FormationList = (props) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [courses, setCourses] = useState([]);
  const fetchCourse = async () => {
    const courses = await getCourses();
    setCourses(courses);
    console.log(courses.filter((course) => course.teacher_id === currentUser));
  };
  useEffect(() => fetchCourse(), []);
  console.log(courses);
  return (
    <div>
      <h1>Vous êtes assigné à ces cours :</h1>
      <div className="row">
        {courses.map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
};

export default FormationList;
