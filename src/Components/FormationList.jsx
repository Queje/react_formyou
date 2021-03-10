import useFetch from "hooks/useFetch";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CourseCard from "./courseCard";

const FormationList = (props) => {
  const { data, get } = useFetch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    get(`/courses?teacher_id=${currentUser.id}`);
  }, []);

  return (
    <div className="col-12">
      <h1>Vous êtes assigné à ces cours :</h1>
      <div className="row">
        {data?.map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
};

export default FormationList;
