import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFetch  from 'hooks/useFetch';
import { useSelector } from 'react-redux';

const CourseCard = ({course, editingCourse, handleDeletedCourse }) => {

  const location = useLocation();
  const {  destroy } = useFetch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const deleteCourse = (id) => {
    destroy(`/admin/courses/${id}`);
    handleDeletedCourse(id)
  };

  return (
    <div className="col-6 my-3">
      <div className="card text-center mx-5">
        <div className="card-header font-weight-bold text-capitalize">
          {course.title}
        </div>
        <div className="card-body">
          <p className="card-text">{course.content}</p>
         {location.pathname === "/" && currentUser && (

         <Link to={`/courses/${course.id}`} className="btn btn-primary mx-2">See sessions</Link>
         )}
            {currentUser && currentUser.role === "admin" && (
            <>
              <button className="btn btn-success mx-2"onClick={(e) => editingCourse(course.id)} type="type" >Update</button>
              <button className="btn btn-danger mx-2" onClick={(e) => deleteCourse(course.id)} type="button" >Delete</button>
            </>
         )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
