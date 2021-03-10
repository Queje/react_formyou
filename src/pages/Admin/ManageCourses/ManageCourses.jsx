/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import useFetch from "Hooks/useFetch";
import "./ManageCourses.scss";
import CourseCard from 'components/CourseCard/CourseCard';
const ManageCourses = () => {
  const { data, error, isLoading, get, patch } = useFetch();
  const [courses, setCourses] = useState([]);
  // const [courses, setCourses] = useState([]);

  const editCourse = (id) => {console.log("edit", id)};


  const deleteCourse = (id) => {
    delete("/courses/:id");
  };

  const getCourse = async () => {
    await get("/courses");
    setCourses(data);
  }


  useEffect(() => {getCourse()}, []);

  console.log("courses", courses)

  return (
    <div className="ManageCourses">
    <h1>This is where we'll manage courses</h1>
      <div className="courses" >
        <h2>Courses</h2>
          {courses && (
            <div className="row">
              {courses.map((e) => (
                <CourseCard key={e.id} course={e} editCourse={editCourse} deleteCourse={deleteCourse} />
              ))}
            </div>
          )}
      </div>
    </div>
    );
};

export default ManageCourses;
