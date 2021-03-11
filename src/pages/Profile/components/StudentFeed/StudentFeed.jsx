import { useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";

const StudentFeed = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { get, data: courses } = useFetch();

  useEffect(() => {
    get(`/users/${currentUser.id}/subscriptions`);
    console.log(courses);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center">
      <h4>You are assigned to the following courses:</h4>
      <hr className="my-2" />
      {courses && courses.map((course) => {
        return (
          <p key={course.id}>
            <span>{course.id}</span>
          </p>
        );
      })}
    </div>
  );
}

export default StudentFeed;