import React, { useEffect } from "react";
import CourseCard from "components/CourseCard/CourseCard";
import useFetch from "Hooks/useFetch";
import Loading from "components/Loading";

const CourseList = () => {
  const { data, error, isLoading, get } = useFetch();

  useEffect(() => {
    get("/courses");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="CourseList">
      <h2>Nos Formations</h2>

      {error && <h4>{error}</h4>}
      {(isLoading && <Loading />) ||
        (data && (
          <div className="row">
            {data.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default CourseList;
