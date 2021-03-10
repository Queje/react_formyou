/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import useFetch from "Hooks/useFetch";
import "./ManageCourses.scss";
import CourseCard from 'components/CourseCard/CourseCard';
import CreateCourse from '../../../components/CreateCourse/CreateCourse';
const ManageCourses = () => {

  const { data, error, isLoading, get, patch, destroy, post } = useFetch();
  const [create, setCreate] = useState(false)

  const editCourse = (id) => {console.log("edit", id)};

  const saveCourse = (course) => {
    post(`/courses`, course);
    setCreate(false)
  }

  const deleteCourse = (id) => {
    destroy(`/courses/${id}`);
    console.log(`Delete course n°${id}`);
  };

  useEffect(() => {get("/courses");}, [data]);

  console.log("courses", data)

  return (
    <div className="ManageCourses">
    <h1>This is where we'll manage courses</h1>
    {!create && <button type="button" onClick={(e) => setCreate(true)} >Create a new course</button> || <CreateCourse saveCourse={saveCourse} />  }
      <div className="courses" >
        <h2>Courses</h2>
          {data && (
            <div className="row">
              {data.map((e) => (
                <CourseCard key={e.id} course={e} editCourse={editCourse} deleteCourse={deleteCourse} />
              ))}
            </div>
          )}
      </div>
    </div>
    );
};

export default ManageCourses;
