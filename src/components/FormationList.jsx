import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCourses } from "services/coursesService";
import CourseCard from "./courseCard";

const FormationList = (props) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [courses, setCourses] = useState([]);
  const fetchCourse = async () => {
    const courses = await getCourses();
    setCourses(
      courses.filter((course) => course.teacher_id === currentUser.id)
    );
  };
  useEffect(() => fetchCourse(), []);
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
