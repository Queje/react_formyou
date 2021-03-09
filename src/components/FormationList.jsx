import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCourses } from "services/coursesService";
import { loadCurrentUser } from "stores/authentication/authActions";

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
      <h1>Vous etes assignez a ces cours :</h1>
      {courses.map((course) => {
        return (
          <ul key={course.title}>
            <li>{course.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default FormationList;
