import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import {
  AiOutlineCheckSquare,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import SelectCourse from "./SelectCourse";

const PromotionLine = ({ promotion }) => {
  const { data, patch, get, destroy } = useFetch();
  const [deleted, setDeleted] = useState();
  const [editing, setEditing] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(promotion.course_id);
  const [selectedNewDate, setselectedNewDate] = useState(promotion.start_date);

  const handleDelete = () => {
    if (
      window.confirm(
        "Are you sure? This will delete all related subscriptions."
      )
    ) {
      destroy(`/admin/promotions/${promotion.id}`);
      setDeleted(true);
    }
  };
  const handleClickEdit = () => {
    if (!editing) {
      setEditing(true);
    } else {
      setEditing(false);
    }
  };
  const getSelectedCourse = (courseId) => {
    setSelectedCourseId(courseId);
  };

  useEffect(() => {
    get(`/admin/promotions/${promotion.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    data &&
    !deleted && (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>
          {(editing && (
            <SelectCourse
              previousCourse={data.course_id}
              getSelectedCourse={getSelectedCourse}
            />
          )) ||
            data.course_title}
        </td>
        <td>{data.clean_start_date}</td>
        <td>{data.classroom_id}</td>
        <td>{data.teacher_name}</td>
        <td>{data.remaining_seats}</td>
        <th colSpan="2">
          {(!editing && (
            <span className="ml-3">
              <AiOutlineEdit
                size={30}
                onClick={handleClickEdit}
                style={{ color: "orange" }}
              />
            </span>
          )) || (
            <span className="ml-3">
              <AiOutlineCheckSquare onClick={handleClickEdit} size={30} />
            </span>
          )}
        </th>
        <th>
          {" "}
          <AiOutlineDelete
            className="ml-3"
            size={30}
            onClick={handleDelete}
            style={{ color: "red" }}
          />
        </th>
      </tr>
    )
  );
};

export default PromotionLine;
