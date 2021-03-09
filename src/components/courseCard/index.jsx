import React from 'react';

const CourseCard = ({course}) => {

  return (
    <div className="col-6 col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.content}</p>
          <button className="btn btn-secondary"> S'inscrire</button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard