import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="col-6 my-3">
      <div className="card text-center">
        <div className="card-header font-weight-bold text-capitalize">
          {course.title}
        </div>
        <div className="card-body">
          <p className="card-text">{course.content}</p>
          <Link to={`/courses/${course.id}`} className="btn btn-primary">See sessions</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
