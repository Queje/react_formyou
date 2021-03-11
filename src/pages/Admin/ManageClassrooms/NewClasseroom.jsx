import useFetch from 'hooks/useFetch';
import React, { useRef, useState } from 'react';
import { AiOutlineCheckSquare } from "react-icons/ai";

const NewClassroom = ({ handleNewClassroom }) => {
  const newTitle = useRef();
  const [creating, setCreating] = useState(false)
  const {post} = useFetch()

  const handleClick = () => {
    if(!creating){
      setCreating(true)
    }else{
      post(`/admin/classrooms/`, { 
        title: newTitle.current.value 
      });
      setCreating(false);
      handleNewClassroom(newTitle.current.value);
    };
  }

  return(
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
        <AiOutlineCheckSquare
            onClick={handleClick}
            size={40}
            style={{ color: "green" }}
          />
      </>
      )}
    </div>
  );

};

export default NewClassroom