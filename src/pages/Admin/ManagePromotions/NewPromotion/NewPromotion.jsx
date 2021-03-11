import { useState } from "react";
import useFetch from "hooks/useFetch";
import SelectNewCourse from "./SelectNewCourse";
import SelectNewClassroom from "./SelectNewClassroom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewPromotion = ({ handleNewPromotion }) => {
  const [creating, setCreating] = useState(false);
  const { post } = useFetch();
  const [courseId, setCourseId] = useState();
  const [classroomId, setClassroomId] = useState();
  const [selectedNewDate, setSelectedNewDate] = useState(new Date());
  const getNewCourse = (newCourseId) => {
    setCourseId(newCourseId);
  };

  const getNewClassroom = (newClassroomId) => {
    setClassroomId(newClassroomId);
  };

  const handleClick = () => {
    if (!creating) {
      setCreating(true);
    } else {
      post(`/admin/promotions`, {
        course_id: courseId,
        classroom_id: classroomId,
        start_date: selectedNewDate,
      });
      setCreating(false);
      handleNewPromotion(courseId);
    }
  };

  return (
    <div className="NewPromotion">
      {creating && (
        <>
          <h1>Promotion creation:</h1>
          <p>
            Course id : {courseId} classroom id: {classroomId}
          </p>
          <p>Select a course:</p>
          <SelectNewCourse getNewCourse={getNewCourse} />

          <p>Select a classroom:</p>
          <SelectNewClassroom getNewClassroom={getNewClassroom} />
          <p>Select a date:</p>
          <DatePicker
            selected={selectedNewDate}
            onChange={(date) => setSelectedNewDate(date)}
            dateFormat="MMMM dd, yyyy"
          />
        </>
      )}
      {
        <button
          type="button"
          className="btn btn-primary btn-lg m-3 "
          onClick={handleClick}
        >
          {(!creating && "CREATE A NEW PROMOTION") || "CONFIRM CREATION"}
        </button>
      }
      {creating && (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setCreating(false)}
        >
          CANCEL CREATION
        </button>
      )}
    </div>
  );
};

export default NewPromotion;
