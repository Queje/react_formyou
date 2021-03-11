/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import useFetch from "hooks/useFetch";
import "./ManageCourses.scss";
import CourseCard from 'components/CourseCard/CourseCard';
import CreateCourse from 'components/Courses/CreateCourse/CreateCourse';
import EditCourse from 'components/Courses/EditCourse/EditCourse';

const ManageCourses = () => {

  const { data, get, patch, destroy, post } = useFetch();

  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [course, setCourse] = useState({});
  const [courseAdded, setCourseAdded] = useState("");
  const [courseDeleted, setCourseDeleted] = useState("");

  const editingCourse = (id) => {
    setEditing(true);
    (creating && setCreating(false));
    const selectedCourse = data.filter(c => c.id === id);
    setCourse(selectedCourse[0]);
  };

  const handleNewCourse = (info) => {
    setCourseAdded(info)
    setCreating(false)
  }

  const creatingCourse = () => {
    (editing && setEditing(false));
    setCreating(true);
  };


  const handleDeletedCourse = (info) => {
    setCourseDeleted(info)
  }

  useEffect(() => {get("/courses"); }, [courseAdded]);

  return (
    <div className="ManageCourses">
      <div className="container" >
        {!creating && <button className="custom-button" type="button" onClick={creatingCourse} >Create a new course</button> || <CreateCourse handleNewCourse={handleNewCourse} />  }
        {editing && <EditCourse course={course} handleNewCourse={handleNewCourse}  />  }
          <div className="courses" >
            <h2>Courses</h2>
              {data && (
                <div className="row">
                  {data.map((e) => (
                    <CourseCard key={e.id} course={e} editingCourse={editingCourse} handleDeletedCourse={handleDeletedCourse} />
                  ))}
                </div>
              )}
          </div>
      </div>
    </div>
    );
};

export default ManageCourses;
