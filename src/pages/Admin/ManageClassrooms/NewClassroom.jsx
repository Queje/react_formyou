import useFetch from "hooks/useFetch";
import React, { useRef, useState } from "react";

const NewClassroom = ({ handleNewClassroom }) => {
  const newTitle = useRef();
  const [creating, setCreating] = useState(false);
  const { post } = useFetch();

  const handleClick = () => {
    if (!creating) {
      setCreating(true);
    } else {
      post(`/admin/classrooms/`, {
        title: newTitle.current.value,
      });
      setCreating(false);
      handleNewClassroom(newTitle.current.value);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-lg m-3 "
        onClick={handleClick}
      >
        CREATE A NEW CLASSROOM
      </button>
      {creating && (
        <>
          <input ref={newTitle} />
          <button
            onClick={handleClick}
            className="btn btn-primary mb-3"
            type="submit"
          >
            Add classroom
          </button>
        </>
      )}
    </div>
  );
};

export default NewClassroom;
