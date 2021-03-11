import React from "react";
import CourseCard from "./CourseCard/CourseCard";

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
