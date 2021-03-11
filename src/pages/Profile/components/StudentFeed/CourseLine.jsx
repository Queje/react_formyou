import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import "./CourseLine.scss";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const CourseLine = ({ course }) => {
  const { data, get, destroy } = useFetch();
  const [deleted, setDeleted] = useState();

  const handleUnsubscribe = (id) => {
    if (window.confirm("Are you sure?")) {
      destroy(`/users/${course.student_id}/subscriptions/${id}`);
      setDeleted(true);
    }
  };

  useEffect(() => {
    get(`/promotions/${course.promotion_id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    data &&
    !deleted &&
    ((
      <tr key={course.id}>
        <td>{course.id}</td>
        <td>
          <Link to={`/courses/${data.course.id}`}>{data.course.title} </Link>
        </td>
        <td>{data.promotion.classroom_id}</td>
        <td>{course.note || "-"}</td>
        <td>
          {" "}
          <AiOutlineDelete
            className="ml-3"
            size={30}
            onClick={() => handleUnsubscribe(course.id)}
            style={{ color: "red" }}
          />
        </td>
      </tr>
    ) || <></>)
  );
};

export default CourseLine;
