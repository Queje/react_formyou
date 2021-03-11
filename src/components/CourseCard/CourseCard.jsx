import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="col-6 col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.content}</p>
          <Link to={`/courses/${course.id}`}>See sessions</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
