/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import useFetch from "hooks/useFetch";
import "./ManageCourses.scss";
import CourseCard from 'components/CourseCard/CourseCard';
import CreateCourse from '../../../components/CreateCourse/CreateCourse';
import EditCourse from '../../../components/EditCourse/EditCourse';
import { useHistory } from 'react-router-dom';
const ManageCourses = () => {

  const { data, get, patch, destroy, post } = useFetch();

  const [create, setCreate] = useState(false)

  const [editing, setEditing] = useState(false)
  const [course, setCourse] = useState({})


  const editingCourse = (id) => {
    setEditing(true);
    (create && setCreate(false));
    const selectedCourse = data.filter(c => c.id === id);
    setCourse(selectedCourse[0]);
    console.log("selectedCourse", selectedCourse[0])
  };

  const updateCourse = (updatedCourse) => {
    patch(`/courses/${course.id}`, updatedCourse);
    setEditing(false);
  };

  const saveCourse = (course) => {
    post(`/courses`, course);
    setCreate(false)
  }

  const deleteCourse = (id) => {
    destroy(`/courses/${id}`);
  };

  useEffect(() => {get("/courses"); }, [create]);

  console.log("data", data)
 

  return (
    <div className="ManageCourses">
    <h1>This is where we'll manage courses</h1>
    {!create && <button type="button" onClick={(e) => setCreate(true)} >Create a new course</button> || <CreateCourse saveCourse={saveCourse} />  }
    {editing && <EditCourse course={course} updateCourse={updateCourse}  />  }
      <div className="courses" >
        <h2>Courses</h2>
          {data && (
            <div className="row">
              {data.map((e) => (
                <CourseCard key={e.id} course={e} editingCourse={editingCourse} deleteCourse={deleteCourse} />
              ))}
            </div>
          )}
      </div>
    </div>
    );
};

export default ManageCourses;
