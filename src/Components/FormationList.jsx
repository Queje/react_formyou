import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CourseCard from "./CourseCard/courseCard";

const FormationList = ({ courses }) => {
  return (
    <div className="col-12">
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
