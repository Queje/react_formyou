import { useEffect } from "react";
import Promotions from "components/Promotions/Promotions";
import useFetch from "hooks/useFetch";
import { useParams } from "react-router-dom";
import capitalize from "capitalize";

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
          <div className="text-center mt-5">
            <h3>Next promotion of {capitalize(data.title)}'s course</h3>
          </div>
          <Promotions course={data} />
        </>
      )}
    </div>
  );
};

export default Course;
