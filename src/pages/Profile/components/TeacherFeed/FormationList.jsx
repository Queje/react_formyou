import CourseCard from "components/CourseCard/CourseCard";
import React from "react";

const FormationList = ({ courses }) => {
  return (
    <div className="col-8">
      <h1>Vous êtes assigné à ces cours :</h1>
      <div className="row">
        {courses?.map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
};

export default FormationList;
