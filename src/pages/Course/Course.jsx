import React, { useEffect } from "react";
import Promotions from "components/Promotions/Promotions";
import useFetch from "hooks/useFetch";
import { useParams } from "react-router-dom";

const Course = () => {
  const { courseId } = useParams();
  const { data, error, get } = useFetch();

  useEffect(() => {
    get(`/courses/${courseId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Course">
      {error && <h4>{error}</h4>}
      {data && (
        <>
          <h1>Next promotion of {data.title}'s course</h1>
          <Promotions course={data} />
        </>
      )}
    </div>
  );
};

export default Course;
