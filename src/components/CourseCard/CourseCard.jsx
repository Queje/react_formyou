import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFetch  from 'hooks/useFetch';

const CourseCard = ({course, editingCourse, handleDeletedCourse }) => {

  const location = useLocation();
  const { data, get, patch, destroy, post } = useFetch();

  const deleteCourse = (id) => {
    destroy(`/courses/${id}`);
    handleDeletedCourse(id)
  };


  return (
    <div className="col-6 col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.content}</p>
         {location.pathname === "/" &&
              <Link to={`/courses/${course.id}`}>See sessions</Link>
          || 
            <>
              <button onClick={(e) => editingCourse(course.id)} type="type" >Update</button>
              <button onClick={(e) => deleteCourse(course.id)} type="button" >Delete</button>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
