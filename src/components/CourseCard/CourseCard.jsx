import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFetch  from 'hooks/useFetch';

const CourseCard = ({course, editingCourse, handleDeletedCourse }) => {

  const location = useLocation();
  const { data, get, patch, destroy, post } = useFetch();

  const deleteCourse = (id) => {
    destroy(`/admin/courses/${id}`);
    handleDeletedCourse(id)
  };


  return (
    <div className="col-6 my-3">
      <div className="card text-center">
        <div className="card-header font-weight-bold text-capitalize">
          {course.title}
        </div>
        <div className="card-body">
          <p className="card-text">{course.content}</p>
         {location.pathname === "/" &&
         <Link to={`/courses/${course.id}`} className="btn btn-primary">See sessions</Link>
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
