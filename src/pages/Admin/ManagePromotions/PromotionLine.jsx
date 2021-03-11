import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import {
  AiOutlineCheckSquare,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import SelectCourse from "./SelectCourse";
import SelectClassroom from "./SelectClassroom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PromotionLine = ({ promotion }) => {
  const { data, patch, get, destroy } = useFetch();
  const [deleted, setDeleted] = useState();
  const [editing, setEditing] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(promotion.course_id);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState(
    promotion.course_title
  );
  const [selectedNewDate, setSelectedNewDate] = useState(
    new Date(promotion.start_date)
  );
  const [selectedClassroomId, setSelectedClassroomId] = useState(
    promotion.classroom_id
  );

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
      patch(`/admin/promotions/${promotion.id}`, {
        course_id: selectedCourseId,
        start_date: selectedNewDate,
        classroom_id: selectedClassroomId,
      });
      // dispatch(fetchEditPost(newText.current.value, post.id));
      setEditing(false);
    }
  };
  const getSelectedCourse = (courseId, courseTitle) => {
    setSelectedCourseId(courseId);
    setSelectedCourseTitle(courseTitle);
  };

  const getSelectedClassroom = (classroomId) => {
    setSelectedClassroomId(classroomId);
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
              previousCourse={{ id: data.course_id, title: data.course_title }}
              getSelectedCourse={getSelectedCourse}
            />
          )) ||
            selectedCourseTitle}
        </td>

        <td>
          {(editing && (
            <DatePicker
              selected={selectedNewDate}
              onChange={(date) => setSelectedNewDate(date)}
              dateFormat="MMMM dd, yyyy"
            />
          )) ||
            selectedNewDate.toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </td>
        <td>
          {(editing && (
            <SelectClassroom
              previousClassroom={selectedClassroomId}
              getSelectedClassroom={getSelectedClassroom}
            />
          )) ||
            selectedClassroomId}
        </td>
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
